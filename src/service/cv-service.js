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

    _getDateLabelFromDateWithFlag(date, isUpperFirstChar = true) {
        if (date !== 'present' && date !== 'настоящее время') {
            const dateLabel = date.split('.')
            const [, month, year] = dateLabel
            let str = `${this.staticData.months[parseInt(month)]} ${year}`
            if(isUpperFirstChar){
                str = str.charAt(0).toLowerCase() + str.slice(1)
            }
            return str
        }
        return date
    }
    
    getSectionLabel = (key) => {
        return this.staticData.constants[key]
    }

    getPersonDetails = () => {
        const person = this.cvData.person
        return {
            fullName: person.fullName,
            position: person.position,
            prefix: `${person.fullName} ${person.prefix}`.replaceAll(" ", "").trim(),
            salary: {
                showSalary: person.salary.showSalary, 
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

    getSoftSkills = () => {
        return this.cvData.skills.soft
    }

    getLanguages = () => {
        const languages = this.cvData.languages.map(([language, level]) => {
            return [
                language,
                level.toUpperCase(),
                defaultData.languageLevels[level]
            ]
        })

        return languages
    }

    getHelpfulLinks = () => {
        return defaultData.links
    }

    getAdditionalInformation = () => {
        const {relocation, trips} = defaultData.information
        return [
            ...this.cvData.information,
            this.staticData.relocation[relocation],
            this.staticData.trips[trips]
        ]
    }

    getAboutMe = () => {
        return this.cvData.about
    }

    getEducationStage = () => {
        const stage = this.cvData.education.stage
        return this.staticData.education[stage]
    }

    getItemsByCategoryName = (category) => {

        let data = []

        switch (category) {
            case 'education':
                data = this.cvData.education.items
                break
            case 'certificates':
                data = this.cvData.certificates
                break
            default:
                break
        }

        data = data.map(({place, range, ...other}) => {
            const placeLabel = this.staticData.location[place]
            return {
                ...other,
                place: placeLabel,
                range: [
                    this._getDateLabelFromDateWithFlag(range[0], false),
                    this._getDateLabelFromDateWithFlag(range[1])
                ]
            }
        })

        return data
    }

    getCompletedProjects = () => {
        const data = this.cvData.projects.map(({url, ...project}) => {
            const linkLabel = `github.com/...${url.substr(url.lastIndexOf('/'))}`
            return {
                ...project,
                url,
                linkLabel
            }
        })

        return data
    }

    getProjectLabels = (key) => {
        return this.staticData.projectLabels[key]
    }
}