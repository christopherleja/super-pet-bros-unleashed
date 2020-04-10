class Pet < ApplicationRecord
    has_many :joiners
    has_many :moves, through: :joiners
end
