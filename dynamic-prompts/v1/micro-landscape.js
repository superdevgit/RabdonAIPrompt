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

function maybeAddColor() {
	if(_.random(0.0, 1.0, true) < 0.5)
		return "{color} ";
	else
		return "";
}

// 100mm photo of isometric floating island in the sky, surreal <name>, intricate, high detail, behance, microworlds smooth, macro sharp focus, centered
module.exports = function(settings, imageSettings, upscaleSettings) {

	// Start with base prompt
	let prompt = "100mm photo of isometric floating island in the sky, surreal";

	if(_.random(0.0, 1.0, true) < 0.25)
		prompt += ", mountains"

	const flowerCount = _.random(1, 3, false);
	const treeCount = _.random(1, 3, false);

	// Add in flowers
	for(let i = 0; i < flowerCount; i++) {
		prompt += `, ${maybeAddColor()}{flower}`;
	}

	// Add in trees
	for(let i = 0; i < treeCount; i++) {
		prompt += ", {tree}";
	}

	if(_.random(0.0, 1.0, true) < 0.5)
		prompt += `, ${maybeAddColor()}vegetation`

	if(_.random(0.0, 1.0, true) < 0.5)
		prompt += ", {weather}"

	if(_.random(0.0, 1.0, true) < 0.5)
		prompt += ", {time}"

	prompt += ", intricate, high detail, behance, microworlds smooth, macro sharp focus, centered";

	return prompt;
}
