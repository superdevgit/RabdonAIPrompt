/*
    Copyright 2022 juenbug12851

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
*/

const fs = require("fs");
const convertMetaToJSON = require("./convertMetaToJSON");

module.exports = function(name, field, settings, imageSettings, upscaleSettings) {
	console.log(`Re-Rolling ${field} from File ID: ${name}`);

	let txt;

	// Check to see if it's a JSON file or not, convert if it isn't
	if(convertMetaToJSON.check(name, imageSettings))
		txt = convertMetaToJSON.convert(name, undefined, settings, imageSettings, upscaleSettings);
	else
		txt = require(`../${imageSettings.saveTo}/${name}.json`);

	// Copy field in if it exists
	if(txt[field] != undefined) {

		console.log(`Found ${field} to reload in file`);

		// Copy field to prompt
		settings.prompt = txt[field];

		// Copy these other settings, this is re-rolling the image not making a variation
		// suff like original prompts and seeds should not be copied
		imageSettings.negativePrompt = txt.negative_prompt;
		imageSettings.sampler = txt.sampler_name;
		imageSettings.cfg = txt.cfg_scale;
		imageSettings.steps = txt.steps;
		imageSettings.restoreFaces = txt.restore_faces;
		imageSettings.width = txt.width;
		imageSettings.height = txt.height;
		imageSettings.denoising = txt.denoising_strength;
		imageSettings.rerollOf = name.toString();

		// Ensure generate images is enabled
		settings.generateImages = true;
	}
	else
		console.log(`Unable to re-roll, did not find ${field} in file.`);
}
