Rails.application.routes.draw do
  devise_for :users
  namespace :api do
    namespace :v1 do
      resources :questionnaires do
        resources :questions do
          resources :answers
        end
        put 'publish_questionnaire', to: 'questionnaires#publish'
        collection do
          get 'show_published', to: 'questionnaires#show_published'
        end
      end
      resources :completed_questionnaires do
        resources :completed_questions
      end
    end
  end
  root to:'homepage#index'
  get '/*path' => 'homepage#index'
end
