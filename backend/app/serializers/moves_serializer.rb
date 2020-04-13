class MovesSerializer < ActiveModel::Serializer
  has_many :pets
  attributes :id, :name, :power, :effect, :effect_target
end
