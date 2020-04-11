# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Move.create(name: "Loud Bark", power: 50, effect: 30, effect_target: 1)
Move.create(name: "Lick", power: 40, effect: 40, effect_target: 1)
Move.create(name: "Headbutt", power: 60, effect: 20, effect_target: 2)

Move.create(name: "Fwomp", power: 50, effect: 40, effect_target: 3)
Move.create(name: "Snuggle Missile", power: 60, effect: 30, effect_target: 3)
Move.create(name: "Pounce", power: 50, effect: 30, effect_target: 4)

Move.create(name: "Nose Boop", power: 60, effect: 20, effect_target: 5)
Move.create(name: "Nuzzle", power: 60, effect: 30, effect_target: 5)
Move.create(name: "Making Biscuits", power: 50, effect: 30, effect_target: 6)

Move.create(name: "Zoomies!", power: 40, effect: 100, effect_target: 4)
Move.create(name: "Paw Slap", power: 70, effect: 1, effect_target: 0)
Move.create(name: "Tackle", power: 50, effect: 1, effect_target: 0)

Move.create(name: "Tippy Taps", power: 0, effect: 30, effect_target: 7)
Move.create(name: "Sleep", power: 0, effect: 50, effect_target: 7)

Pet.create(name: "Chairman Meow", hp: 50, attack: 13, defense: 11, speed: 12, pet_image_url: "https://images.theconversation.com/files/312307/original/file-20200128-81416-1bjupq6.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop")
Pet.create(name: "Leon Trotsky", hp: 65, attack: 14, defense: 12, speed: 9, pet_image_url: "https://149359219.v2.pressablecdn.com/wp-content/uploads/2017/08/horse.jpg")
Pet.create(name: "Notorious DOG", hp: 55, attack: 11, defense: 15, speed: 8, pet_image_url: "https://s3.amazonaws.com/petcentral.com/wp-content/uploads/2019/11/25163421/wrinkly-dog-neapolitan.jpg")
Pet.create(name: "Ravioli", hp: 45, attack: 11, defense: 11, speed: 11, pet_image_url: "https://emborapets.com/wp-content/uploads/2019/04/pug.jpg")
Pet.create(name: "Undead Grumpy Cat", hp: 70, attack: 13, defense: 8, speed: 8, pet_image_url: "https://ktar.com/wp-content/uploads/2019/05/grumpy-cat-getty.jpg")


Joiner.create(pet_id: 1, move_id: 3)
Joiner.create(pet_id: 1, move_id: 9)
Joiner.create(pet_id: 1, move_id: 10)
Joiner.create(pet_id: 1, move_id: 12)

Joiner.create(pet_id: 2, move_id: 2)
Joiner.create(pet_id: 2, move_id: 4)
Joiner.create(pet_id: 2, move_id: 7)
Joiner.create(pet_id: 2, move_id: 11)

Joiner.create(pet_id: 3, move_id: 1)
Joiner.create(pet_id: 3, move_id: 4)
Joiner.create(pet_id: 3, move_id: 5)
Joiner.create(pet_id: 3, move_id: 12)

Joiner.create(pet_id: 4, move_id: 1)
Joiner.create(pet_id: 4, move_id: 5)
Joiner.create(pet_id: 4, move_id: 7)
Joiner.create(pet_id: 4, move_id: 9)

Joiner.create(pet_id: 5, move_id: 3)
Joiner.create(pet_id: 5, move_id: 6)
Joiner.create(pet_id: 5, move_id: 7)
Joiner.create(pet_id: 5, move_id: 9)

