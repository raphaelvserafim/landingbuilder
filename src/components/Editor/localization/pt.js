"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var traitInputAttr = {
  placeholder: 'por exemplo. Texto aqui'
};
var _default = {
  assetManager: {
    addButton: 'Adicionar imagem',
    inputPlh: 'http://path/to/the/image.jpg',
    modalTitle: 'Selecione a imagem',
    uploadTitle: 'Solte os arquivos aqui ou clique para fazer upload'
  },
  blockManager: {
    labels: {},
    categories: {}
  },
  domComponents: {
    names: {
      '': 'Box',
      wrapper: 'Body',
      text: 'Text',
      comment: 'Comment',
      image: 'Image',
      video: 'Video',
      label: 'Label',
      link: 'Link',
      map: 'Map',
      tfoot: 'Table foot',
      tbody: 'Table body',
      thead: 'Table head',
      table: 'Table',
      row: 'Table row',
      cell: 'Table cell'
    }
  },
  deviceManager: {
    device: 'Device',
    devices: {
      desktop: 'Desktop',
      tablet: 'Tablet',
      mobileLandscape: 'Mobile Landscape',
      mobilePortrait: 'Mobile Portrait'
    }
  },
  panels: {
    buttons: {
      titles: {
        preview: 'Preview',
        fullscreen: 'Fullscreen',
        'sw-visibility': 'View components',
        'export-template': 'View code',
        'open-sm': 'Open Style Manager',
        'open-tm': 'Settings',
        'open-layers': 'Open Layer Manager',
        'open-blocks': 'Open Blocks'
      }
    }
  },
  selectorManager: {
    label: 'Classes',
    selected: 'Selecionado',
    emptyState: '- Estado -',
    states: {
      hover: 'Hover',
      active: 'Click',
      'nth-of-type(2n)': 'Even/Odd'
    }
  },
  styleManager: {
    empty: 'Selecione um elemento antes de usar o Gerenciador de estilo',
    layer: 'Camada',
    fileButton: 'Imagens',
    sectors: {
      general: 'Em geral',
      layout: 'Layout',
      typography: 'Tipografia',
      decorations: 'Decorações',
      extra: 'Extra',
      flex: 'Flex',
      dimension: 'Dimension'
    },
    properties: {}
  },
  traitManager: {
    empty: 'Selecione um elemento antes de usar o Trait Manager',
    label: 'Configurações do componente',
    traits: {
      labels: {},
      attributes: {
        id: traitInputAttr,
        alt: traitInputAttr,
        title: traitInputAttr,
        href: {
          placeholder: 'exemplo. https://google.com'
        }
      },
      options: {
        target: {
          false: 'Esta janela',
          _blank: 'Nova janela'
        }
      }
    }
  }
};
exports.default = _default;