Rails.application.routes.draw do
  devise_for :users, :skip => [:sessions]
  namespace :api do
    namespace :v1 do
      # get 'questionnaires/index'
      # post 'questionnaires/create'
      # get 'questionnaires/:id', to:'questionnaires#show'
      # delete 'questionnaires/:id', to:'questionnaires#destroy'
      resources :questionnaires do
        resources :questions do
          resources :answers
        end
      end
    end
  end
  root to:'homepage#index'
  get '/*path' => 'homepage#index'
end
