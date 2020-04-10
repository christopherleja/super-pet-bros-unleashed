class CreateJoiners < ActiveRecord::Migration[6.0]
  def change
    create_table :joiners do |t|
      t.integer :pet_id, null: false, foreign_key: true
      t.integer :move_id, null: false, foreign_key: true

      t.timestamps
    end
  end
end
