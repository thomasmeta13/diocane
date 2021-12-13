AFRAME.registerComponent('info-panel2', {
    init: function () {
      var buttonEls = document.querySelectorAll('.dio-button');
      var fadeBackgroundEl = this.fadeBackgroundEl = document.querySelector('#fadeBackground');
      
      this.dioTitleEl = document.querySelector('#dioTitle');
      this.dioDescriptionEl = document.querySelector('#dioDescription');

      this.dioInfo = {
        dioButton: {
          title: 'DAO control',
          description: 'HomePage'
      }
    };

    this.onMenuButtonClick = this.onMenuButtonClick.bind(this);
    this.onBackgroundClick = this.onBackgroundClick.bind(this);
    this.backgroundEl = document.querySelector('#background');
    for (var i = 0; i < buttonEls.length; ++i) {
      buttonEls[i].addEventListener('click', this.onMenuButtonClick);
    }
    this.backgroundEl.addEventListener('click', this.onBackgroundClick);
    this.el.object3D.renderOrder = 9999999;
    this.el.object3D.depthTest = false;
    fadeBackgroundEl.object3D.renderOrder = 9;
    fadeBackgroundEl.getObject3D('mesh').material.depthTest = false;
  },

  onMenuButtonClick: function (evt) {
    var dioInfo = this.dioInfo[evt.currentTarget.id];

    this.backgroundEl.object3D.scale.set(0.8, 0.8, 0.8);

    this.el.object3D.scale.set(0.8, 0.8, 0.8);
    if (AFRAME.utils.device.isMobile()) { this.el.object3D.scale.set(0.8, 0.8, 0.8); }
    this.el.object3D.visible = true;
    this.fadeBackgroundEl.object3D.visible = true;

    this.movieTitleEl.setAttribute('text', 'value', dioInfo.title);
    this.movieDescriptionEl.setAttribute('text', 'value', dioInfo.description);
  },
  
    onBackgroundClick: function (evt) {
        this.backgroundEl.object3D.scale.set(0.001, 0.001, 0.001);
        this.el.object3D.scale.set(0.001, 0.001, 0.001);
        this.el.object3D.visible = false;
        this.fadeBackgroundEl.object3D.visible = false;
      }
    });