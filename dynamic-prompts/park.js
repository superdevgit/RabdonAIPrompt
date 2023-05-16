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

module.exports = function() {

	// Start with base prompt
	let prompt = "((park))";

    if(_.random(0.0, 1.0, true) < 0.5)
        prompt += ", benches"

    if(_.random(0.0, 1.0, true) < 0.5)
        prompt += ", people"

    if(_.random(0.0, 1.0, true) < 0.5)
        prompt += ", crowd"

    if(_.random(0.0, 1.0, true) < 0.5)
        prompt += ", fountain"

    if(_.random(0.0, 1.0, true) < 0.5)
        prompt += ", walkway"

    if(_.random(0.0, 1.0, true) < 0.2)
        prompt += `, #eerie`

    if(_.random(0.0, 1.0, true) < 0.25)
        prompt += `, #ice`

    if(_.random(0.0, 1.0, true) < 0.25)
        prompt += `, #mystical`

    if(_.random(0.0, 1.0, true) < 0.2)
        prompt += `, #room-state`

	prompt += `, #wildlife, #water, #nature, #weather`;

	return prompt;
}

module.exports.full = true;
