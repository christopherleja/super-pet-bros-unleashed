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
        pet = Pet.create(create_pet_params)
        render json: pet
    end

    private

    def create_pet_params
        params.permit(:name, :pet_image_url, :hp, :attack, :defense, :speed, :moves)
    end
    
end