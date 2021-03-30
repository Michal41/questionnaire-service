class AddUserIdToQuestionnaires < ActiveRecord::Migration[6.0]
  def change
    add_column :questionnaires, :user_id, :integer
  end
end
