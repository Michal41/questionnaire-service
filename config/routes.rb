Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'questionnaires/index'
      post 'questionnaires/create'
      get 'questionnaires/:id', to:'questionnaires#show'
      delete 'questionnaires/:id', to:'questionnaires#destroy'
      post 'questions/create', to: 'questions#create'
    end
  end
  root 'homepage#index'
  get '/*path' => 'homepage#index'
end
