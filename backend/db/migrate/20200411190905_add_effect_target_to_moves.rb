class AddEffectTargetToMoves < ActiveRecord::Migration[6.0]
  def change
    add_column :moves, :effect_target, :integer
  end
end
