export class Settings {
    constructor() {
        this.defaultSettings = new Map([
            ['theme', 'dark'],
            ['music', 'trance'],
            ['difficulty', 'easy']
        ]);
        this.settingsOptions = new Map([
            ['theme', ['dark','light', 'gray']],
            ['music', ['trance', 'pop', 'rock', 'chillout', 'off']],
            ['difficulty', ['easy', 'normal', 'hard', 'nightmare']]
        ]);
        this.userSettings = new Map([]);
    }

    getSettings() {
        return new Map ([ ...this.defaultSettings, ...this.userSettings ]);
    }

    addUserSettings(setting, option) {
        if (!this.settingsOptions.has(setting)) {
            throw new Error(`No such setting "${setting}"`);
        }
        const options = this.settingsOptions.get(setting);
        if (!options.includes(option)) {
            throw new Error(`No such option "${option}"`);
        } else {
            this.userSettings.set(setting, option);
        }
    }
}
