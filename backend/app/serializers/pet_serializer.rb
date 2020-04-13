class PetSerializer < ActiveModel::Serializer
  has_many :moves
  attributes :id, :name, :hp, :attack, :defense, :speed, :pet_image_url, :moves
end
