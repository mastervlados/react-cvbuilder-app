import defaultData from './loc/default.json'
import enData from './loc/en/static.json'
import enCV from './loc/en/cv.json'
import ruData from './loc/ru/static.json'
import ruCV from './loc/ru/cv.json'

export default class CVService {
    
    language;
    staticData;
    cvData;

    constructor(language) {
        this.language = language
        switch (language) {
            case 'en':
                this.staticData = enData
                this.cvData = enCV
                break
            case 'ru':
                this.staticData = ruData
                this.cvData = ruCV
                break
            default:
                break
        }
    }
    
    _getEmploymentLabel(key) {
        return this.staticData.employment[key]
    }

    _getWorkScheduleLabel(key) {
        return this.staticData.workSchedule[key]
    }

    _getCurrencyLabel(code) {
        return defaultData.currency[code]
    }

    _getLocationLabel(key) {
        return this.staticData.location[key]
    }

    _getPersonAgeLabel(birthday) {
        // Input = 16.06.1995
        // Expected = 06.16.1995
        // Calculate age by date of birth
        const [ day, month, year ] = birthday.split('.')
        const date = new Date(`${month}.${day}.${year}`)
        const present = new Date()
        const age = Math.floor(parseInt(present - date) / 31536000000)

        switch (this.language) {
            case 'en':
                return `${age} years old`
            case 'ru':
                const RUSSIAN_PREFIX = {
                    '0':' лет',
                    '1':' год',
                    '2':' года',
                    '3':' года',
                    '4':' года',
                    '5':' лет',
                    '6':' лет',
                    '7':' лет',
                    '8':' лет',
                    '9':' лет',
                }
                return `${age + RUSSIAN_PREFIX[age.toString().slice(-1)]}`
            default:
                return age
        }
    }

    _getNumberWithSpaces(number) {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
    }
    
    getSectionLabel = (key) => {
        return this.staticData.constants[key]
    }

    getPersonDetails = () => {
        const person = this.cvData.person
        return {
            fullName: person.fullName,
            position: person.position,
            salary: {
                amount: this._getNumberWithSpaces(person.salary.amount),
                currencyCode: this._getCurrencyLabel(person.salary.currencyCode)
            },
            info: {
                birthday: this._getPersonAgeLabel(person.info.birthday),
                citizen: person.info.citizen,
                employment: this._getEmploymentLabel(person.info.employment),
                workSchedule: this._getWorkScheduleLabel(person.info.workSchedule)
            },
            contacts: {
                phone: person.contacts.phone,
                mail: person.contacts.mail,
                currentLocation: this._getLocationLabel(person.contacts.currentLocation)
            }
        }
    }

    getKeySkillsFromCategory = (category) => {
        /**
         * Input:
         * {
         *  frontend: [...]
         *  backend: [...]
         *  other: [...]
         * }
         * 
         * Expected:
         *  frontend: [[], [], []]
         */
        const data = this.cvData.skills
        let keySkillsInCategory = []
        const regexp = /^([a-zA-Zа-яА-Я0-9\s]+)$|^(.*)\((.*)\)$/
        data[category].forEach((array) => {
            const result = array.match(regexp)
            if (result[1] !== undefined && result[1] !== null) {
                keySkillsInCategory = [
                    ...keySkillsInCategory,
                    [result[1]]
                ]
            } else {
                const subSkills = result[3]
                                    .split(',')
                                    .map((skill) => skill.trim())

                keySkillsInCategory = [
                    ...keySkillsInCategory,
                    [
                        result[2], 
                        ...subSkills
                    ]
                ]
            }
        })

        return keySkillsInCategory
    }
}