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

// This was taken from publicprompts.art and modified to be more dynamic
const entityBasicKeywords = require("../entity");

// hologram of a <name> floating in space, a vibrant digital illustration, dribbble, quantum wavetracing, black background, behance hd
module.exports = function(settings, imageSettings, upscaleSettings) {

	// Start with base prompt
	let prompt = `hologram of a `;
	prompt += entityBasicKeywords();
	prompt += `, floating in space, a vibrant digital illustration, dribbble, quantum wavetracing, black background, behance hd`;

	return prompt;
}
