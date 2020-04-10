class CreatePets < ActiveRecord::Migration[6.0]
  def change
    create_table :pets do |t|
      t.string :name
      t.integer :hp
      t.integer :attack
      t.integer :defense
      t.integer :speed
      t.string :pet_image_url

      t.timestamps
    end
  end
end

