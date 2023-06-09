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

const _ = require("lodash");

// 3d fluffy <name>, closeup cute and adorable, cute big circular reflective eyes, long fuzzy fur, Pixar render, unreal engine cinematic smooth, intricate detail, cinematic
module.exports = function(settings, imageSettings, upscaleSettings) {

	// Start with base prompt
	let prompt = `3d fluffy`;

	switch(_.random(0, 1, false)) {
		case 0:
			prompt += ` {animal}`;
			break;
		case 1:
			prompt += ` {mythological-creature}`;
			break;
	}

	prompt += ` closeup cute and adorable, cute big circular reflective eyes, long fuzzy fur, Pixar render, unreal engine cinematic smooth, intricate detail, cinematic`;

	return prompt;
}
