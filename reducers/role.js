const constants = require('../utils/constants');

const initialState = {}

function update(state = initialState, action) {
	console.log("action.type是："+action.type);
	switch (action.type) {
		case constants.CHANGE_VIEW:
			return Object.assign({}, state, {viewFlag:true})
		default:
			return state
  }
}

module.exports = update;
