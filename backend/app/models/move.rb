class Move < ApplicationRecord
    has_many :joiners
    has_many :pets, through: :joiner
end
