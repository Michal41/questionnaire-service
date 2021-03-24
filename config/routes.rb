Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      # get 'questionnaires/index'
      # post 'questionnaires/create'
      # get 'questionnaires/:id', to:'questionnaires#show'
      # delete 'questionnaires/:id', to:'questionnaires#destroy'
      resources :questionnaires do
        resources :questions
      end
      resources :answers
    end
  end
  root 'homepage#index'
  get '/*path' => 'homepage#index'
end
