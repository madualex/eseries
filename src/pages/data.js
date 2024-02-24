import waecImg from '../assets/images/eseries/waec-logo.png'
import jambImg from '../assets/images/eseries/jamb-logo.png'
import necoImg from '../assets/images/eseries/neco-logo.png'
import putmeImg from '../assets/images/eseries/unilag-logo.png'
import unilagImg from '../assets/images/eseries/unilag-logo.png'
import oauImg from '../assets/images/eseries/oau-logo.png'


export const Examinations = [
    {
        id: 1,
        name: 'WAEC',
        logo: waecImg,
        color: 'success',
        subjects: ['Mathematics', 'English', 'Chemistry', 'Biology', 'Agric', 'Hausa'],
        year: ['1990', '1992', '1994', '1996', '2000', '2001', '2002', '2003',]
    },
    {
        id: 2,
        name: 'UTME',
        logo: jambImg,
        color: 'warning',
        subjects: ['Mathematics', 'English', 'Chemistry', 'Physics', 'Biology', 'Agric', 'Hausa', 'Literature'],
        year: ['1990', '1992', '1994', '1996', '2000']
    },
    {
        id: 3,
        name: 'NECO',
        logo: necoImg,
        color: 'danger',
        subjects: ['Mathematics', 'English', 'Chemistry', 'Physics', 'Biology', 'Agric', 'Hausa', 'Economics', 'Fine Arts'],
        year: ['1990', '1992', '1994', '1996', '2000', '2005', '2006', '2008',]
    },
    {
        id: 4,
        name: 'POST UTME',
        logo: putmeImg,
        color: 'dark',
        subjects: ['Chemistry', 'Physics', 'Biology', 'Agric', 'Hausa'],
        year: ['1990', '1992', '1994', '1996', '2000', '2005', '2010', '2015']
    },
    {
        id: 5,
        name: 'WAEC',
        logo: waecImg,
        color: 'secondary',
        subjects: ['Mathematics', 'English', 'Chemistry', 'Physics', 'Biology', 'Agric', 'Hausa'],
        year: ['1990', '1992', '1994', '1996', '2000', '2010', '2014', '2018', '2022']
    },
    {
        id: 6,
        name: 'UTME',
        logo: jambImg,
        color: 'primary',
        subjects: ['Mathematics', 'English', 'Chemistry', 'Physics', 'Biology', 'Agric', 'Hausa', 'Economics', 'Further Maths', 'Government'],
        year: ['1990', '1992', '1994', '1996', '2000', '2003', '2006', '2009', '2012', '2015', '2018', '2021', '2023']
    },
    {
        id: 7,
        name: 'NECO',
        logo: necoImg,
        color: 'info',
        subjects: ['Mathematics', 'English', 'Chemistry', 'Physics', 'Biology', 'Agric', 'Hausa'],
        year: ['1990', '1992', '1994', '1996', '2000']
    },
    {
        id: 8,
        name: 'POST UTME',
        logo: putmeImg,
        color: 'danger',
        subjects: ['Mathematics', 'English', 'Chemistry', 'Physics', 'Biology', 'Agric', 'Hausa'],
        year: ['1990', '1992', '1994', '1996', '2000']
    },
    {
        id: 9,
        name: 'WAEC',
        logo: waecImg,
        color: 'warning',
        subjects: ['Mathematics', 'English', 'Chemistry', 'Physics', 'Biology', 'Agric', 'Hausa'],
        year: ['1990', '1992', '1994', '1996', '2000']
    },
    {
        id: 10,
        name: 'UTME',
        logo: jambImg,
        color: 'dark',
        subjects: ['Mathematics', 'English', 'Chemistry', 'Physics', 'Biology', 'Agric', 'Hausa'],
        year: ['1990', '1992', '1994', '1996', '2000']
    },
    {
        id: 11,
        name: 'NECO',
        logo: necoImg,
        color: 'secondary',
        subjects: ['Mathematics', 'English', 'Chemistry', 'Physics', 'Biology', 'Agric', 'Hausa'],
        year: ['1990', '1992', '1994', '1996', '2000']
    },
    {
        id: 12,
        name: 'POST UTME',
        logo: putmeImg,
        color: 'success',
        subjects: ['Mathematics', 'English', 'Chemistry', 'Physics', 'Biology', 'Agric', 'Hausa'],
        year: ['1990', '1992', '1994', '1996', '2000']
    }
]

export const Subjects = [
    {
        id: 1,
        name: 'Mathematics'
    },
    {
        id: 2,
        name: 'English'
    },
    {
        id: 3,
        name: 'Biology'
    },
    {
        id: 4,
        name: 'Physics'
    },
    {
        id: 5,
        name: 'Chemistry'
    },
    {
        id: 6,
        name: 'Yoruba Language'
    },
    {
        id: 7,
        name: 'Igbo Language'
    },
    {
        id: 8,
        name: 'Hausa Language'
    },
    {
        id: 9,
        name: 'Agricultural Science'
    },
    {
        id: 10,
        name: 'Literature in English'
    },
    {
        id: 11,
        name: 'Economics'
    }
]

export const Years = [ '2011', '2012', '2013'
    // {
    //     id: 1,
    //     year: '2011'
    // },
    // {
    //     id: 2,
    //     year: '2012'
    // },
    // {
    //     id: 3,
    //     year: '2013'
    // },
    // {
    //     id: 4,
    //     year: '2014'
    // },
    // {
    //     id: 5,
    //     year: '2015'
    // },
    // {
    //     id: 6,
    //     year: '2016'
    // },
    // {
    //     id: 7,
    //     year: '2017'
    // },
    // {
    //     id: 8,
    //     year: '2018'
    // },
    // {
    //     id: 9,
    //     year: '2019'
    // },
    // {
    //     id: 10,
    //     year: '2020'
    // },
    // {
    //     id: 11,
    //     year: '2021'
    // },
    // {
    //     id: 12,
    //     year: '2022'
    // },
    // {
    //     id: 13,
    //     year: '2023'
    // },
]

export const News = [
    {
        id: 1,
        logo: unilagImg,
        update: 'Unilag to commence Post-UTME exams',
        date: 'Dec 4, 2023'
    },
    {
        id: 2,
        logo: oauImg,
        update: 'OAU commence Pre-Degree registration',
        date: 'Mar 10, 2023'
    },
    {
        id: 3,
        logo: necoImg,
        update: 'NECO to commence exam registration',
        date: 'Jan 18, 2023'
    },
    {
        id: 4,
        logo: jambImg,
        update: 'UTME to commence exam registration',
        date: 'Apr 1, 2023'
    },
    {
        id: 5,
        logo: waecImg,
        update: 'WAEC to cancel 2023/2024 session exams',
        date: 'Oct 15, 2023'
    },
    {
        id: 6,
        logo: unilagImg,
        update: 'Unilag to commence Post-UTME exams',
        date: 'Sep 12, 2023'
    },
    {
        id: 7,
        logo: oauImg,
        update: 'OAU commence Pre-Degree registration',
        date: 'Dec 4, 2023'
    },
    {
        id: 8,
        logo: necoImg,
        update: 'NECO to commence exam registration',
        date: 'May 11, 2023'
    },
    {
        id: 9,
        logo: jambImg,
        update: 'UTME to commence exam registration',
        date: 'July 19, 2023'
    },
    {
        id: 10,
        logo: waecImg,
        update: 'WAEC to cancel 2023/2024 session exams',
        date: 'Dec 19, 2023'
    },
    {
        id: 11,
        logo: unilagImg,
        update: 'Unilag to commence Post-UTME exams',
        date: 'Mar 30, 2023'
    },
    {
        id: 12,
        logo: oauImg,
        update: 'OAU commence Pre-Degree registration',
        date: 'July 25, 2023'
    },
    {
        id: 13,
        logo: necoImg,
        update: 'NECO to commence exam registration',
        date: 'Jan 18, 2023'
    },
    {
        id: 14,
        logo: jambImg,
        update: 'UTME to commence exam registration',
        date: 'Aug 27, 2023'
    },
    {
        id: 15,
        logo: waecImg,
        update: 'WAEC to cancel 2023/2024 session exams',
        date: 'Feb 23, 2023'
    },
]

export const Questions = [
    {
        id: 1,
        ques: 'From the words lettered A to D, choose the word that has the same consonant sounds as the one represented by the letters underlined.',
        underlined: 'Zoo',
        idA: 1,
        idB: 2,
        idC: 3,
        idD: 4,
        optionA: 'assault',
        optionB: 'assist',
        optionC: 'release',
        optionD: 'please'

    },
    {
        id: 2,
        ques: 'What did the author of the book study?',
        underlined: 'Zoo',
        idA: 5,
        idB: 6,
        idC: 7,
        idD: 8,
        optionA: 'bolaji',
        optionB: 'bolaji',
        optionC: 'bolaji',
        optionD: 'bolaji'

    },
    {
        id: 3,
        ques: 'Choose the option that has the same consonant sound as the one represented by the letter(s) underlined.',
        underlined: 'Zoo',
        idA: 9,
        idB: 10,
        idC: 11,
        idD: 12,
        optionA: 'please',
        optionB: 'please',
        optionC: 'please',
        optionD: 'please'

    },
    {
        id: 4,
        ques: 'Select the option that best explain the information conveyed in the sentence.',
        underlined: 'Zoo',
        idA: 13,
        idB: 14,
        idC: 15,
        idD: 16,
        optionA: 'assault',
        optionB: 'aassault',
        optionC: 'assault',
        optionD: 'assault'

    },
    {
        id: 5,
        ques: 'Which of these correctly summaries the arguments adduced by the advocate of deregulation?',
        underlined: 'Zoo',
        idA: 17,
        idB: 18,
        idC: 19,
        idD: 20,
        optionA: 'casualty',
        optionB: 'casualty',
        optionC: 'casualty',
        optionD: 'casualty'

    },
    {
        id: 6,
        ques: 'From the words lettered A to D, choose the word that has the same consonant sounds as the one represented by the letters underlined.',
        underlined: 'Zoo',
        idA: 21,
        idB: 22,
        idC: 23,
        idD: 24,
        optionA: 'assault',
        optionB: 'assist',
        optionC: 'release',
        optionD: 'please'

    },
    {
        id: 7,
        ques: 'From the words lettered A to D, choose the word that has the same consonant sounds as the one represented by the letters underlined.',
        underlined: 'Zoo',
        idA: 25,
        idB: 26,
        idC: 27,
        idD: 28,
        optionA: 'assault',
        optionB: 'assist',
        optionC: 'release',
        optionD: 'please'

    },
    {
        id: 8,
        ques: 'From the words lettered A to D, choose the word that has the same consonant sounds as the one represented by the letters underlined.',
        underlined: 'Zoo',
        idA: 29,
        idB: 30,
        idC: 31,
        idD: 32,
        optionA: 'assault',
        optionB: 'assist',
        optionC: 'release',
        optionD: 'please'

    },
    {
        id: 9,
        ques: 'From the words lettered A to D, choose the word that has the same consonant sounds as the one represented by the letters underlined.',
        underlined: 'Zoo',
        idA: 33,
        idB: 34,
        idC: 35,
        idD: 36,
        optionA: 'assault',
        optionB: 'assist',
        optionC: 'release',
        optionD: 'please'

    },
    {
        id: 10,
        ques: 'From the words lettered A to D, choose the word that has the same consonant sounds as the one represented by the letters underlined.',
        underlined: 'Zoo',
        idA: 37,
        idB: 38,
        idC: 39,
        idD: 40,
        optionA: 'assault',
        optionB: 'assist',
        optionC: 'release',
        optionD: 'please'

    },
    {
        id: 11,
        ques: 'From the words lettered A to D, choose the word that has the same consonant sounds as the one represented by the letters underlined.',
        underlined: 'Zoo',
        idA: 41,
        idB: 42,
        idC: 43,
        idD: 44,
        optionA: 'assault',
        optionB: 'assist',
        optionC: 'release',
        optionD: 'please'

    },
    {
        id: 12,
        ques: 'From the words lettered A to D, choose the word that has the same consonant sounds as the one represented by the letters underlined.',
        underlined: 'Zoo',
        idA: 45,
        idB: 46,
        idC: 47,
        idD: 48,
        optionA: 'assault',
        optionB: 'assist',
        optionC: 'release',
        optionD: 'please'

    },
    {
        id: 13,
        ques: 'From the words lettered A to D, choose the word that has the same consonant sounds as the one represented by the letters underlined.',
        underlined: 'Zoo',
        idA: 49,
        idB: 50,
        idC: 51,
        idD: 52,
        optionA: 'assault',
        optionB: 'assist',
        optionC: 'release',
        optionD: 'please'

    },
    {
        id: 14,
        ques: 'From the words lettered A to D, choose the word that has the same consonant sounds as the one represented by the letters underlined.',
        underlined: 'Zoo',
        idA: 53,
        idB: 54,
        idC: 55,
        idD: 56,
        optionA: 'assault',
        optionB: 'assist',
        optionC: 'release',
        optionD: 'please'

    },
    {
        id: 15,
        ques: 'From the words lettered A to D, choose the word that has the same consonant sounds as the one represented by the letters underlined.',
        underlined: 'Zoo',
        idA: 57,
        idB: 58,
        idC: 59,
        idD: 60,
        optionA: 'assault',
        optionB: 'assist',
        optionC: 'release',
        optionD: 'please'
    },
]

export const Scores = [
    {
        id: 1,
        number: 1,
        color: 'success'
    },
    {
        id: 2,
        number: 2,
        color: 'success'
    },
    {
        id: 3,
        number: 3,
        color: 'danger'
    },
    {
        id: 4,
        number: 4,
        color: 'success'
    },
    {
        id: 5,
        number: 5,
        color: 'white'
    },
    {
        id: 6,
        number: 6,
        color: 'success'
    },
    {
        id: 7,
        number: 7,
        color: 'white'
    },
    {
        id: 8,
        number: 8,
        color: 'success'
    },
    {
        id: 9,
        number: 9,
        color: 'danger'
    },
    {
        id: 10,
        number: 10,
        color: 'success'
    },
    {
        id: 1,
        number: 1,
        color: 'success'
    },
    {
        id: 2,
        number: 2,
        color: 'success'
    },
    {
        id: 3,
        number: 3,
        color: 'danger'
    },
    {
        id: 4,
        number: 4,
        color: 'success'
    },
    {
        id: 5,
        number: 5,
        color: 'white'
    },
    {
        id: 6,
        number: 6,
        color: 'success'
    },
    {
        id: 7,
        number: 7,
        color: 'white'
    },
    {
        id: 8,
        number: 8,
        color: 'success'
    },
    {
        id: 9,
        number: 9,
        color: 'danger'
    },
    {
        id: 10,
        number: 10,
        color: 'success'
    },
    {
        id: 1,
        number: 1,
        color: 'success'
    },
    {
        id: 2,
        number: 2,
        color: 'success'
    },
    {
        id: 3,
        number: 3,
        color: 'danger'
    },
    {
        id: 4,
        number: 4,
        color: 'success'
    },
    {
        id: 5,
        number: 5,
        color: 'white'
    },
    {
        id: 6,
        number: 6,
        color: 'success'
    },
    {
        id: 7,
        number: 7,
        color: 'white'
    },
    {
        id: 8,
        number: 8,
        color: 'success'
    },
    {
        id: 9,
        number: 9,
        color: 'danger'
    },
    {
        id: 10,
        number: 10,
        color: 'success'
    },
    {
        id: 1,
        number: 1,
        color: 'success'
    },
    {
        id: 2,
        number: 2,
        color: 'success'
    },
    {
        id: 3,
        number: 3,
        color: 'danger'
    },
    {
        id: 4,
        number: 4,
        color: 'success'
    },
    {
        id: 5,
        number: 5,
        color: 'white'
    },
    {
        id: 6,
        number: 6,
        color: 'success'
    },
    {
        id: 7,
        number: 7,
        color: 'white'
    },
    {
        id: 8,
        number: 8,
        color: 'success'
    },
    {
        id: 9,
        number: 9,
        color: 'danger'
    },
    {
        id: 10,
        number: 10,
        color: 'success'
    },
    {
        id: 1,
        number: 1,
        color: 'success'
    },
    {
        id: 2,
        number: 2,
        color: 'success'
    },
    {
        id: 3,
        number: 3,
        color: 'danger'
    },
    {
        id: 4,
        number: 4,
        color: 'success'
    },
    {
        id: 5,
        number: 5,
        color: 'white'
    },
    {
        id: 6,
        number: 6,
        color: 'success'
    },
    {
        id: 7,
        number: 7,
        color: 'white'
    },
    {
        id: 8,
        number: 8,
        color: 'success'
    },
    {
        id: 9,
        number: 9,
        color: 'danger'
    },
    {
        id: 10,
        number: 10,
        color: 'success'
    },
    {
        id: 1,
        number: 1,
        color: 'success'
    },
    {
        id: 2,
        number: 2,
        color: 'success'
    },
    {
        id: 3,
        number: 3,
        color: 'danger'
    },
    {
        id: 4,
        number: 4,
        color: 'success'
    },
    {
        id: 5,
        number: 5,
        color: 'white'
    },
    {
        id: 6,
        number: 6,
        color: 'success'
    },
    {
        id: 7,
        number: 7,
        color: 'white'
    },
    {
        id: 8,
        number: 8,
        color: 'success'
    },
    {
        id: 9,
        number: 9,
        color: 'danger'
    },
    {
        id: 10,
        number: 10,
        color: 'success'
    },
]

export const Exams = [
    {
        id: '1',
        name: 'UTME|JAMB',
        color: 'warning',
        subjects: 4
    },
    {
        id: '2',
        name: 'WASSCE',
        color: 'secondary',
        subjects: 9
    },
    {
        id: '3',
        name: 'PostUTME',
        color: 'success',
        subjects: 4
    },
    {
        id: '4',
        name: 'JUPEB',
        color: 'danger',
        subjects: 4
    },
]

export const Overview = [
    {
        id: '1',
        logo: 'las la-bolt',
        amount: '20+',
        color: 'success',
        info: 'Hours of Practise'
    },
    {
        id: '2',
        logo: 'bx bx-bookmark',
        amount: '10',
        color: 'warning',
        info: 'Saved Subjects'
    },
    {
        id: '3',
        logo: 'bx bx-file',
        amount: '3',
        color: 'info',
        info: 'Active Exams'
    }
]
