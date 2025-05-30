import type { Schema, Struct } from '@strapi/strapi';

export interface DatasetsApiLink extends Struct.ComponentSchema {
  collectionName: 'components_datasets_api_links';
  info: {
    description: '';
    displayName: 'api_link';
    icon: 'cloud';
  };
  attributes: {
    api_url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface DatasetsCsvUpload extends Struct.ComponentSchema {
  collectionName: 'components_datasets_csv_uploads';
  info: {
    displayName: 'csv_upload';
    icon: 'file';
  };
  attributes: {
    csv_file: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Schema.Attribute.Required;
  };
}

export interface DatasetsJsonData extends Struct.ComponentSchema {
  collectionName: 'components_datasets_json_data';
  info: {
    displayName: 'JSON_data';
    icon: 'code';
  };
  attributes: {
    json_data: Schema.Attribute.JSON & Schema.Attribute.Required;
  };
}

export interface ElementsStat extends Struct.ComponentSchema {
  collectionName: 'components_elements_stats';
  info: {
    displayName: 'Stat';
    icon: 'lightbulb';
  };
  attributes: {
    stat_context: Schema.Attribute.Blocks;
    stat_icon: Schema.Attribute.Text &
      Schema.Attribute.CustomField<
        'plugin::icons-field.icon',
        {
          output: 'svg';
        }
      >;
    stat_media: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    stat_title: Schema.Attribute.String & Schema.Attribute.Required;
    stat_units: Schema.Attribute.String & Schema.Attribute.Required;
    stat_value: Schema.Attribute.Decimal & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'datasets.api-link': DatasetsApiLink;
      'datasets.csv-upload': DatasetsCsvUpload;
      'datasets.json-data': DatasetsJsonData;
      'elements.stat': ElementsStat;
    }
  }
}
