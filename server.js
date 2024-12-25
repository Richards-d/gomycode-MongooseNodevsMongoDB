let mongoose = require('mongoose');
let dotenv = require('dotenv' ).config({path:'.env'});

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true }).then(()=>{
    console.log('connexion sucessful ');
})
.catch((error) => console.log(error));

// Créer et sauvegarder un enregistrement d'un modèle
var personModel = require('./models/Person');
const { Model } = require('mongoose');

var person = new personModel({name: 'John Doe', age: 30, favoriteFoods: ['Pizza', 'Burger']});

person.save().then((res)=> {
console.log('Person saved:', res);

}  ).catch(err => console.error(err))


// Créez plusieurs personnes avec  Model.create()
const arrayOfPeople = [
    { name: 'Alice', age: 25, favoriteFoods: ['Pasta', 'Salad'] },
    { name: 'Bob', age: 35, favoriteFoods: ['Steak', 'Ice cream'] },
    { name: 'Mary', age: 28, favoriteFoods: ['Burrito'] },
  ];
  
personModel.create(arrayOfPeople).then(res => {
    console.log('People created:', res);
}).catch(err => console.error(err))

// Trouver par nom
personModel.find({name: 'John Doe'}).then(res =>{
    console.log('People found:', res)
}).catch(err => console.error(err))

// Trouver par aliment
personModel.findOne({favoriteFoods: 'Burrito'}).then(res =>{
    console.log('Person found:', res)
}).catch(err => console.error(err))

// Trouver by ID
personModel.findById('673b2be8ab66bcfa01799538').then(res =>{
    console.log('Person found by ID:', res)
    
}).catch(err => console.error(err))

// Ajouter un aliment favori
personModel.findById('673b2be8ab66bcfa01799538').then(person => {
    person.favoriteFoods.push('Orange');

    person.save().then(res => console.log(res)
    
    ).catch(error => console.log(error))
})


// Mettre à jour l'âge d'une personne
personModel.findOneAndUpdate({name: 'Alice', age: 20, new: 'true'}).then(res =>{
    console.log('Person updated:', res)
}).catch(err => console.error(err))


// Supprimer une personne par ID
personModel.findByIdAndDelete('673b1ff1927869fce3ad108c').then(res =>{
    console.log('Person deleted:', res)
}).catch(err => console.error(err))


// Supprimer toutes les personnes nommées Mary
personModel.deleteOne({name: 'Mary'}).then(res =>{
    console.log('Person removed:', res)
}).catch(err => console.error(err))

// Rechercher les personnes qui aimient les burritos
personModel.find({favoriteFoods: 'Burrito'}).sort({name: 1}).select('-age').limit(2).then(res =>{
        console.log('Filtred people:', res)
    }).catch(err => console.error(err))

  



