class RecipeCategoriesController < ApplicationController
  def show
    @category = RecipeCategory.find(params[:id])
  end
end
