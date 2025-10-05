import React from 'react';
import './Header.css'; // Adjust the path as per your project structure

const Header = () => {
  const handleViewMenu = () => {
    // Add functionality here to navigate to the menu or perform any relevant action
    console.log('View Menu clicked');
  };

  return (
    <div className='header'>
      <div className='header-contents'>
        <h2>
          Order your favourite food here
        </h2>
        <p>
          Choosing your favorite dish can be a delightful yet personal decision, reflecting your unique tastes and preferences. 
          It's a moment where flavors, textures, and memories come together to create a satisfying culinary experience. Whether 
          it's the comforting warmth of a homemade lasagna, the zesty freshness of sushi rolls, or the rich indulgence of a 
          decadent chocolate lava cake, each dish holds the potential to evoke joy and satisfaction. The process of selecting your 
          favorite dish often involves reminiscing about cherished meals shared with loved ones, discovering new flavors that tantalize
          your palate, and embracing the comfort of familiar flavors that bring a sense of happiness and contentment. Ultimately, your
          favorite dish is more than just food—it's a celebration of your culinary journey and a reflection of your unique culinary 
          identity.
        </p>
        <button onClick={handleViewMenu}>
          View Menu
        </button>
      </div>
    </div>
  );
}

export default Header;