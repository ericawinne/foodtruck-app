class CreateMenuItems < ActiveRecord::Migration[8.1]
  def change
    create_table :menu_items do |t|
      t.string :name
      t.decimal :price
      t.text :description

      t.timestamps
    end
  end
end
