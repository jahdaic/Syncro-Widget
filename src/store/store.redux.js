import { createSlice } from '@reduxjs/toolkit';
import * as Utility from '../scripts/utility';

export const initialState = {
	system: {
		view: location.pathname.split('/')[2] || 'analog-clock'
	},
	settings: {
		theme: 'lcd',
		units: 'imperial',
		timeFormat: '12',
		dateFormat: 'long',
	},
	timestamps: {
		start: Date.now(),
		gps: 0,
		gyro: 0,
		weather: 0,
		spotify: 0
	},
	gps: null,
	gyro: null,
	weather: null,
	spotify: {
		challenge: Utility.randomString(69),
		state: Utility.randomString(13)
	},
};

const storeSlice = createSlice({
	name: 'store',
	initialState,
	reducers: {
		setSystem(state, action) {
			return {...state, system: {...state.system, ...action.payload}};
		},
		setSettings(state, action) {
			return {...state, settings: {...state.settings, ...action.payload}};
		},
		setGPS(state, action) {
			return {...state, gps: action.payload};
		},
		setGyro(state, action) {
			return {...state, gyro: action.payload};
		},
		setWeather(state, action) {
			return {...state, weather: action.payload, timestamps: {...state.timestamps, weather: Date.now()}};
		},
		setSpotify(state, action) {
			return {...state, spotify: {...state.spotify, ...action.payload}};
		},
	}
});

const { actions } = storeSlice;

export const {reducer: storeReducer, name: storeSliceKey} = storeSlice;
export const storeActions = {...actions};
export default storeActions;