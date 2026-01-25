class AddImageUrlToMenuItems < ActiveRecord::Migration[8.1]
  def change
    add_column :menu_items, :image_url, :string
  end
end
