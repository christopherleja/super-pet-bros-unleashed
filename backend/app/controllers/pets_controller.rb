class PetsController < ApplicationController

    def index
        pets = Pet.all

        render json: pets
    end

    def show
        pet = Pet.find(params[:id])

        render json: pet
    end

    def create
        pet = Pet.create(name: params[:name], pet_image_url: params[:pet_image_url], hp: params[:hp], attack: params[:attack], defense: params[:defense], speed: params[:speed])
        params[:moves].each{|move| Joiner.create(pet_id: pet.id, move_id: move[:id])}
        render json: pet
    end

    private

    # def create_pet_params
    #     params.permit(:name, :pet_image_url, :hp, :attack, :defense, :speed, :moves)
    # end
    
end