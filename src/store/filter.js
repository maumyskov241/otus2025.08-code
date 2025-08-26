import { defineStore } from 'pinia'

const STORE_NAME = 'filter'

const getDefaultSettings = () => ({
    categories: [],
    days: [],
    price: {
        min: 3,
        max: 2900,
    },
    rating: {
        min: 2.5,
        max: 4.5,
    }
})

export const useFilter = defineStore(STORE_NAME, {
    state: () => ({
        settings: getDefaultSettings(),
        queryString: '',
        categories: [{ value: 1, label: "electronics" }, { value: 2, label: "mobile" }, { value: 3, label: "men's clothing" }, { value: 4, label: "appliances" }, { value: 5, label: "jewelery" }, { value: 6, label: "tv" }, { value: 7, label: "audio" }, { value: 8, label: "laptop" }, { value: 9, label: "women's clothing" }, { value: 10, label: "gaming" }, ]
    }),
    actions: {
        init(queryString) {
            if (queryString != '') {
                try {
                    this.settings = new Function('return ' + atob(queryString))();
                } catch {
                    this.settings = null;
                }
            } else {
                console.log(22);
                this.settings = getDefaultSettings();
                console.log(this.settings);
            }
        },
        update(newfilter) {
            this.settings = newfilter;
            this.queryString = (getDefaultSettings() === newfilter ? '' : btoa(JSON.stringify(newfilter)));
        },
        check(elem) {
            let rsp = true;
            if (this.settings.categories !== null && this.settings.categories.length > 0) {
                rsp = false;
                for (let i in this.settings.categories) {
                    if (elem.category === this.settings.categories[i].label) {
                        rsp = true;
                    }
                }
            }

            if (rsp == false) return false;
            if (this.settings.days !== null && this.settings.days.length > 0) {
                rsp = false;
                for (let i in this.settings.days) {
                    if (elem.sale >= this.settings.days[i].from && elem.sale <= this.settings.days[i].to) {
                        rsp = true;
                    }
                }
            }

            if (rsp == false) return false;
            rsp = (elem.price >= this.settings.price.min && elem.price <= this.settings.price.max);

            if (rsp == false) return false;
            rsp = (elem.rate >= this.settings.rating.min && elem.rate <= this.settings.rating.max);

            return rsp;
        },
    },
})