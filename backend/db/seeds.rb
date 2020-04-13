# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


move1 = Move.create(name: "Loud Bark", power: 50, effect: 30, effect_target: 1)
move2 = Move.create(name: "Lick", power: 40, effect: 40, effect_target: 1)
move3 = Move.create(name: "Headbutt", power: 60, effect: 20, effect_target: 2)

move4 = Move.create(name: "Fwomp", power: 50, effect: 40, effect_target: 3)
move5 = Move.create(name: "Snuggle Missile", power: 60, effect: 30, effect_target: 3)
move6 = Move.create(name: "Pounce", power: 50, effect: 30, effect_target: 4)

move7 = Move.create(name: "Nose Boop", power: 60, effect: 20, effect_target: 5)
move8 = Move.create(name: "Nuzzle", power: 60, effect: 30, effect_target: 5)
move9 = Move.create(name: "Making Biscuits", power: 50, effect: 30, effect_target: 6)

move10 = Move.create(name: "Zoomies!", power: 40, effect: 100, effect_target: 4)
move11 = Move.create(name: "Paw Slap", power: 70, effect: 1, effect_target: 0)
move12 = Move.create(name: "Tackle", power: 70, effect: 1, effect_target: 0)

move13 = Move.create(name: "Tippy Taps", power: 0, effect: 30, effect_target: 7)
move14 = Move.create(name: "Sleep", power: 0, effect: 50, effect_target: 7)

pet1 = Pet.create(name: "Chairman Meow", hp: 50, attack: 13, defense: 11, speed: 12, pet_image_url: "https://images.theconversation.com/files/312307/original/file-20200128-81416-1bjupq6.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop")
pet2 = Pet.create(name: "Leon Trotsky", hp: 65, attack: 14, defense: 12, speed: 9, pet_image_url: "https://149359219.v2.pressablecdn.com/wp-content/uploads/2017/08/horse.jpg")
pet3 = Pet.create(name: "Notorious DOG", hp: 55, attack: 11, defense: 15, speed: 8, pet_image_url: "https://s3.amazonaws.com/petcentral.com/wp-content/uploads/2019/11/25163421/wrinkly-dog-neapolitan.jpg")
pet4 = Pet.create(name: "Ravioli", hp: 45, attack: 11, defense: 11, speed: 11, pet_image_url: "https://emborapets.com/wp-content/uploads/2019/04/pug.jpg")
pet5 = Pet.create(name: "Undead Grumpy Cat", hp: 70, attack: 13, defense: 8, speed: 8, pet_image_url: "https://ktar.com/wp-content/uploads/2019/05/grumpy-cat-getty.jpg")


Joiner.create(pet_id: pet1.id, move_id: move3.id)
Joiner.create(pet_id: pet1.id, move_id: move9.id)
Joiner.create(pet_id: pet1.id, move_id: move10.id)
Joiner.create(pet_id: pet1.id, move_id: move14.id)

Joiner.create(pet_id: pet2.id, move_id: move2.id)
Joiner.create(pet_id: pet2.id, move_id: move4.id)
Joiner.create(pet_id: pet2.id, move_id: move7.id)
Joiner.create(pet_id: pet2.id, move_id: move13.id)

Joiner.create(pet_id: pet3.id, move_id: move1.id)
Joiner.create(pet_id: pet3.id, move_id: move4.id)
Joiner.create(pet_id: pet3.id, move_id: move5.id)
Joiner.create(pet_id: pet3.id, move_id: move14.id)

Joiner.create(pet_id: pet4.id, move_id: move1.id)
Joiner.create(pet_id: pet4.id, move_id: move5.id)
Joiner.create(pet_id: pet4.id, move_id: move7.id)
Joiner.create(pet_id: pet4.id, move_id: move9.id)

Joiner.create(pet_id: pet5.id, move_id: move3.id)
Joiner.create(pet_id: pet5.id, move_id: move6.id)
Joiner.create(pet_id: pet5.id, move_id: move7.id)
Joiner.create(pet_id: pet5.id, move_id: move9.id)

