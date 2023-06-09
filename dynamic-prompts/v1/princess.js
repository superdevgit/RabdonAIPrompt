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

const _ = require("lodash");
const {artistRepeater} = require("../../helpers/keywordRepeater");

function maybeAddColor() {
	if(_.random(0.0, 1.0, true) < 0.5)
		return "{color} ";
	else
		return "";
}

module.exports = function(settings, imageSettings, upscaleSettings) {

	// Start with base prompt
	let prompt = `portrait, princess, royalty`;

	if(_.random(0.0, 1.0, true) < 0.5)
		prompt += ", girl"
	else
		prompt += ", woman"

	if(_.random(0.0, 1.0, true) < 0.5)
		prompt += ", {emotion}"

	if(_.random(0.0, 1.0, true) < 0.5)
		prompt += `, ${maybeAddColor()}{hair}`

	if(_.random(0.0, 1.0, true) < 0.5)
		prompt += ", full body"
	else if(_.random(0.0, 1.0, true) < 0.5)
		prompt += ", head and chest, upperbody"

	if(_.random(0.0, 1.0, true) < 0.5)
		prompt += ", up-close"

	if(_.random(0.0, 1.0, true) < 0.5)
		prompt += ", sceptor"
	else if(_.random(0.0, 1.0, true) < 0.5)
		prompt += ", staff"

	if(_.random(0.0, 1.0, true) < 0.5)
		prompt += `, ${maybeAddColor()}crown`
	else if(_.random(0.0, 1.0, true) < 0.5)
		prompt += `, ${maybeAddColor()}tiara`

	if(_.random(0.0, 1.0, true) < 0.5)
		prompt += `, ${maybeAddColor()}robes`

	const clothingCount = (_.random(0.0, 1.0, true) < 0.5) ? _.random(0, 5, false) : 0;

	for(let i = 0; i < clothingCount; i++) {
		prompt += `, ${maybeAddColor()}{clothes}`;
	}

	const adjectiveCount = (_.random(0.0, 1.0, true) < 0.5) ? _.random(0, 3, false) : 0;

	for(let i = 0; i < adjectiveCount; i++) {
		prompt += ", {adjective}";
	}

	const nounCount = (_.random(0.0, 1.0, true) < 0.5) ? _.random(0, 3, false) : 0;

	for(let i = 0; i < nounCount; i++) {
		prompt += ", {noun}";
	}

	if(_.random(0.0, 1.0, true) < 0.5)
		prompt += ", {verb}"

	if(_.random(0.0, 1.0, true) < 0.5)
		prompt += ", {time}"

	if(_.random(0.0, 1.0, true) < 0.5)
		prompt += ", {weather}"

	if(_.random(0.0, 1.0, true) < 0.5)
		prompt += ", {weather}"

	if(_.random(0.0, 1.0, true) < 0.5)
		prompt += ", dynamic-pose"

	if(_.random(0.0, 1.0, true) < 0.5)
		prompt += ", {art-movement}"

	if(_.random(0.0, 1.0, true) < 0.5)
		prompt += ", {art-technique}"

	const imageEffects = (_.random(0.0, 1.0, true) < 0.5) ? _.random(0, 5, false) : 0;

	for(let i = 0; i < imageEffects; i++)
		prompt += ", {image-effect}"

	if(_.random(0.0, 1.0, true) < 0.5)
		prompt += ", <rays>";

	const artistCount = (settings.includeArtist) ? _.random(0, 3, false) : 0;	

	// Add in artist
	const artists = artistRepeater("artist", true, settings);
	if(artists.length > 0)
		prompt += `, ${artists}`;

	return prompt;
}
