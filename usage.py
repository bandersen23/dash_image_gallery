import dash_image_gallery
import dash
from dash.dependencies import Input, Output, State
import dash_html_components as html
import dash_core_components as dcc

base_images = [{
    'src': 'https://picsum.photos/id/1018/1000/600/',
    'thumbnail': 'https://picsum.photos/id/1018/250/150/',
    'thumbnailWidth': 2,
    'thumbnailHeight': 1
  },
  {
    'src': 'https://picsum.photos/id/1015/1000/600/',
    'thumbnail': 'https://picsum.photos/id/1015/250/150/',
    'thumbnailWidth': 2,
    'thumbnailHeight': 1
  },
  {
    'src': 'https://picsum.photos/id/1019/1000/600/',
    'thumbnail': 'https://picsum.photos/id/1019/250/150/',
    'thumbnailWidth': 2,
    'thumbnailHeight': 1
  }]

app = dash.Dash(__name__)

app.layout = html.Div([
    html.Center([
        html.H1('Image Gallery'),
        html.H3('Check how many images you want:'),
        dcc.Checklist(id='checklist', options=[{'label': i, 'value': i} for i in range(3)], value=[0,1,2]),
    ]),
    dash_image_gallery.DashImageGallery(
        id='gallery',
        images=base_images,
        enableImageSelection=False,
        enableLightbox=False
    )
])

if __name__ == '__main__':
    app.run_server(debug=True)
