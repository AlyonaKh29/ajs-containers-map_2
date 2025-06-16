import { Settings } from '../settings'

describe('Tests for the Settings class', () => {

    let newUserSettings;

    beforeEach(() => {
        newUserSettings = new Settings();
    });

    const defSettings = [
        ['theme', 'dark'],
        ['music', 'trance'],
        ['difficulty', 'easy']
    ];

    test.each(defSettings)('should return the correct value for %s with default settings', (key, value) => {
        const resultSettings = newUserSettings.getSettings();
        expect(resultSettings.get(key)).toBe(value);
    });

    const mergedSettings = [
        ['theme', 'light'],
        ['music', 'trance'],
        ['difficulty', 'hard']
    ];

    test.each(mergedSettings)("should return the correct value for %s given the user's settings", (key, value) => {
        newUserSettings.addUserSettings('theme', 'light');
        newUserSettings.addUserSettings('difficulty', 'hard');
        const resultSettings = newUserSettings.getSettings();
        expect(resultSettings.get(key)).toBe(value);
    })

    test('The user added an incorrect setting', () => {
        expect(() => newUserSettings.addUserSettings('selection', 'normal')).toThrow('No such setting "selection"');
    })

    test('The user added an incorrect option', () => {
        expect(() => newUserSettings.addUserSettings('music', 'classic')).toThrow('No such option "classic"');
    })
})

