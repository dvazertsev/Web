'use strict'

const persons = [
    {
        firstName : 'Dmytro',
        lastName : 'Vazertsev',
        email : 'kaba4eken@gmail.com',
        password : '12345',
        gender : 'Men',
    },
    {
        firstName : 'Sveta',
        lastName : 'Anfilova',
        email : 'svetik_anf@gmail.com',
        password : '54321',
        gender : 'Women',
    },
    {
        firstName : 'Eva',
        lastName : 'Postovitiuk',
        email : 'pstvtk_@gmail.com',
        password : '67890',
        gender : 'Women',
    }
]


if(!localStorage.getItem('allPersons')){
    localStorage.setItem('allPersons',JSON.stringify(persons));
}

if(!localStorage.getItem('currentUserPosition')){
    localStorage.setItem('currentUserPosition',-1);
}