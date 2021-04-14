class Api::V1::FiledQuestionnairesController < ApplicationController
  protect_from_forgery except: %i[create]

  def create
    render json: { x: 'foo' }
  end

end