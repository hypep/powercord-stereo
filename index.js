//
// stereo for powercorddddd
// discord.gg/hyperpop
//

const Discord = require('powercord/components/Icons/Discord');
const _0x3689 = ['channels', 'log', '5603DXeTkT', 'VoiceConnection', '937312farbxd', '26545alvfTu', '17lYNBPO', 'params', '1DdomOE', 'powercord/entities', '109pgfPxB', 'startPlugin', 'pluginWillUnload', 'getVoiceEngine', 'audioEncoder', '1qdteWW', 'encodingVoiceBitRate', '801973xRAJyx', '96BXUfPG', 'setTransportOptions', '7311AWPaGM', 'setTransportOptions\x20called:', '29bbxhYg', '1165817XywsqW', '67198YsOvPL', 'exports', 'fec'];
const _0x5dbd = function(_0x259b21, _0x1a5f4e) {
	_0x259b21 = _0x259b21 - 0x6d;
	let _0x3689dd = _0x3689[_0x259b21];
	return _0x3689dd;
};
const _0x3d1235 = _0x5dbd;
(function(_0x41ed9e, _0x3ffd0f) {
	const _0x259007 = _0x5dbd;
	while (!![]) {
		try {
			const _0x43da4c = -parseInt(_0x259007(0x75)) * parseInt(_0x259007(0x76)) + parseInt(_0x259007(0x82)) * parseInt(_0x259007(0x72)) + parseInt(_0x259007(0x87)) * parseInt(_0x259007(0x78)) + -parseInt(_0x259007(0x74)) + parseInt(_0x259007(0x7a)) * -parseInt(_0x259007(0x84)) + -parseInt(_0x259007(0x81)) * parseInt(_0x259007(0x7f)) + -parseInt(_0x259007(0x6d)) * -parseInt(_0x259007(0x86));
			if (_0x43da4c === _0x3ffd0f) break;
			else _0x41ed9e['push'](_0x41ed9e['shift']());
		} catch (_0x5636e1) {
			_0x41ed9e['push'](_0x41ed9e['shift']());
		}
	}
}(_0x3689, 0xa25a6));
const {
	Plugin
} = require(_0x3d1235(0x79)), {
	getModule
} = require('powercord/webpack');
module[_0x3d1235(0x6e)] = class stereo extends Plugin {
	[_0x3d1235(0x7b)]() {
		const _0x2ac040 = _0x3d1235;
		this[_0x2ac040(0x73)] = getModule([_0x2ac040(0x7d)], ![])[_0x2ac040(0x7d)]()['VoiceConnection'];
		class _0x4af1ea extends this[_0x2ac040(0x73)] {
			[_0x2ac040(0x83)](_0x1b53dd) {
				const _0x1dd365 = _0x2ac040;
				console[_0x1dd365(0x71)](_0x1dd365(0x85), _0x1b53dd), _0x1b53dd[_0x1dd365(0x7e)] && (_0x1b53dd['audioEncoder'][_0x1dd365(0x77)] = {
					'stereo': '2'
				}, _0x1b53dd[_0x1dd365(0x7e)][_0x1dd365(0x70)] = 0x2), _0x1b53dd[_0x1dd365(0x6f)] && (_0x1b53dd[_0x1dd365(0x6f)] = ![]), _0x1b53dd['encodingVoiceBitRate'] < 0x6d600 && (_0x1b53dd[_0x1dd365(0x80)] = 0x6d600), super['setTransportOptions'](_0x1b53dd);
			}
		}
		getModule([_0x2ac040(0x7d)], ![])[_0x2ac040(0x7d)]()[_0x2ac040(0x73)] = _0x4af1ea;
	}[_0x3d1235(0x7c)]() {
		const _0x84f9c4 = _0x3d1235;
		getModule([_0x84f9c4(0x7d)], ![])[_0x84f9c4(0x7d)]()['VoiceConnection'] = this[_0x84f9c4(0x73)];
	}
};