class AddDescriptionToQuestionaires < ActiveRecord::Migration[6.0]
  def change
    add_column :questionnaires, :description, :string
  end
end
