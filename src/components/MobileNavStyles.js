module.exports = function(menuDisplay) {
  return {
    bmBurgerButton: {
      display: menuDisplay,
      position: 'fixed',
      width: '36px',
      height: '30px',
      left: 'initial',
      right: '36px',
      top: '40px',
      zIndex: '999',
    },
    bmBurgerBars: {
      background: 'white'
    },
    bmCrossButton: {
      height: '44px',
      width: '44px'
    },
    bmCross: {
      background: 'white'
    },
    bmMenu: {
      background: 'rgba(244,187,69,1)',
      padding: '2.5em 1.5em 0',
      fontSize: '1.15em'
    },
    bmMorphShape: {
      fill: 'white'
    },
    bmItemList: {
      color: 'white',
      padding: '0.8em'
    },
    bmOverlay: {
      background: 'rgba(0, 0, 0, 0)'
    }
  };
};
