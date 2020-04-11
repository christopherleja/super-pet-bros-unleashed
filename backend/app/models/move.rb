class Move < ApplicationRecord
    has_many :joiners
    has_many :pets, through: :joiner

    # effect_target: 1 = opp defense
    # effect_target: 2 = self defense
    # effect_target: 3 = opp speed
    # effect_target: 4 = self speed
    # effect_target: 5 = opp attack
    # effect_target: 6 = self attack
    # effect_target: 7 = self hp
    # effect_target: 8 = no target
end
