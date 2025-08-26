import { defineStore } from 'pinia'

const STORE_NAME = 'basket'

const getDefaultSettings = () => ({})

const getSettings = () => {
    const settings = localStorage.getItem(STORE_NAME)

    return settings ? JSON.parse(settings) : getDefaultSettings()
}

export const useBasket = defineStore(STORE_NAME, {
    state: () => ({
        settings: getSettings(),
    }),
    actions: {
        updateSettings(partialSettings) {
            this.settings = {
                ...this.settings,
                ...partialSettings,
            }

            localStorage.setItem(STORE_NAME, JSON.stringify(this.settings))
        },
        increment(item) {
            if (this.settings[item.id] == undefined) {
                this.settings[item.id] = {quantity : 1 , product : item};
            } else {
                this.settings[item.id]['quantity']++;
            }
            
            localStorage.setItem(STORE_NAME, JSON.stringify(this.settings));
        },

        decrement(item) {
            if (this.settings[item.id]['quantity'] == 1) {
                delete this.settings[item.id];
            } else {
                this.settings[item.id]['quantity']--;
            }
            
            localStorage.setItem(STORE_NAME, JSON.stringify(this.settings));
        },

        delete(item) {
            delete this.settings[item.id];

            localStorage.setItem(STORE_NAME, JSON.stringify(this.settings));
        },

        clear() {
            this.settings = getDefaultSettings();
            
            localStorage.setItem(STORE_NAME, JSON.stringify(this.settings));
        },

        check(item) {
            if (this.settings[item.id] !== undefined) {
                return this.settings[item.id]['quantity'];
            }

            return '';
        }
    },
})