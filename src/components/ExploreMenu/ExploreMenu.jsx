import React from 'react';
import './ExploreMenu.css';
import { menu_list } from '../../assets/assets'; // Adjust the path as per your project structure

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Explore our Menu</h1>
      <p className='explore-menu-text'>
        Choosing your favorite dish can be a delightful yet personal decision, reflecting your unique tastes and preferences.
        It's a moment where flavors, textures, and memories come together to create a satisfying culinary experience. Whether
        it's the comforting warmth of a homemade lasagna, the zesty freshness of sushi rolls, or the rich indulgence of a 
        decadent chocolate lava cake, each dish holds the potential to evoke joy and satisfaction. The process of selecting 
        your favorite dish often involves reminiscing about cherished meals shared with loved ones, discovering new flavors that
        tantalize your palate, and embracing the comfort of familiar flavors that bring a sense of happiness and contentment. 
        Ultimately, your favorite dish is more than just food—it's a celebration of your culinary journey and a reflection 
        of your unique culinary identity.
      </p>
      <div className='explore-menu-list'>
        {menu_list.map((item, index) => (
          <div
            key={index}
            className='explore-menu-list-item'
            onClick={() => setCategory(prev => prev === item.menu_name ? 'All' : item.menu_name)}
          >
            <img className={category === item.menu_name ? 'active' : ''} src={item.menu_image} alt="" />
            <p>{item.menu_name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExploreMenu;
