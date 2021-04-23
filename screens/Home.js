import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import {global} from '../styles/global';
const Home = ({navigation}) => {
  const [details, setDetails] = useState([
    {
      key: '1',
      name: 'La madre de Frankenstein',
      imageUrl:
        'https://static0planetadelibroscom.cdnstatics.com/usuaris/libros/fotos/310/m_libros/portada_la-madre-de-frankenstein_almudena-grandes_201912021812.jpg',
      detail:
        'El apasionante relato de una mujer y un hombre que optaron por resistir en los tiempos más difíciles. La novela más intensa y emotiva del ciclo de los Episodios de una Guerra Interminable.',
    },
    {
      key: '12',
      name: 'Y Julia retó a los dioses',
      imageUrl:
        'https://static1planetadelibroscom.cdnstatics.com/usuaris/libros/fotos/311/m_libros/portada_y-julia-reto-a-los-dioses_santiago-posteguillo_202001150940.jpg',
      detail: 'Cuando el enemigo es tu propio hijo… ¿existe la victoria?',
    },
    {
      key: '123',
      name: 'A corazón abierto',
      imageUrl:
        'https://static1planetadelibroscom.cdnstatics.com/usuaris/libros/fotos/311/m_libros/portada_a-corazon-abierto_elvira-lindo_201912311129.jpg',
      detail:
        'El auge y declive de una gran pasión, el amor feroz de dos personas que parecían conjurarse en contra de una vida serena.',
    },
    {
      key: '1234',
      name: 'Alegría',
      imageUrl:
        'https://static3planetadelibroscom.cdnstatics.com/usuaris/libros/fotos/303/m_libros/portada_alegria_manuel-vilas_201910211145.jpg',
      detail:
        'Una novela escrita desde el corazón de la memoria. Una búsqueda esperanzada de la alegría.',
    },
    {
      key: '12345',
      name: 'Terra Alta',
      imageUrl:
        'https://static3planetadelibroscom.cdnstatics.com/usuaris/libros/fotos/303/m_libros/portada_terra-alta_javier-cercas_201910211142.jpg',
      detail:
        'Él era un hombre justo, el mundo, no. Terra Alta, un thriller impactante.',
    },
    {
      key: '123456',
      name: 'El heredero',
      imageUrl:
        'https://static7planetadelibroscom.cdnstatics.com/usuaris/libros/fotos/307/m_libros/portada_el-heredero_rafael-tarradas-bulto_201911041200.jpg',
      detail:
        'En un mundo al borde del abismo solo el amor les devolverá su destino.',
    },
    {
      key: '1234567',
      name: 'Un perfecto caballero',
      imageUrl:
        'https://static0planetadelibroscom.cdnstatics.com/usuaris/libros/fotos/300/m_libros/portada_un-perfecto-caballero_pilar-eyre_201909171547.jpg',
      detail:
        'En una Barcelona de vencedores y vencidos, ella le ofrecía lo único que él no podía tener: el amor',
    },
    {
      key: '12345678',
      name: 'El largo camino a casa',
      imageUrl:
        'https://static8planetadelibroscom.cdnstatics.com/usuaris/libros/fotos/308/m_libros/portada_el-largo-camino-a-casa_alan-hlad_201911131258.jpg',
      detail:
        'Unidos por el amor. Separados por el miedo.Una novela fascinante basada en una inolvidable historia real.',
    },
    {
      key: '123456789',
      name: 'El mapa de los afectos',
      imageUrl:
        'https://static0planetadelibroscom.cdnstatics.com/usuaris/libros/fotos/310/m_libros/portada_el-mapa-de-los-afectos_ana-merino_202001131615.jpg',
      detail: 'Premio Nadal 2020.',
    },
    {
      key: '1234567890',
      name: 'El latido de la tierra',
      imageUrl:
        'https://static8planetadelibroscom.cdnstatics.com/usuaris/libros/fotos/298/m_libros/portada_el-latido-de-la-tierra_luz-gabas_201907091608.jpg',
      detail: 'Cuando el amor es verdadero, simplemente se escucha al corazón',
    },
  ]);

  return (
    <ScrollView>
      <FlatList
        data={details}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('Details', item)}>
            <View style={global.flatList}>
              <Image
                style={global.tinyLogo}
                source={{
                  uri: item.imageUrl,
                }}
              />
              <View style={global.columna}>
                <Text style={global.titulo}>{item.name}</Text>
                <Text>{item.detail}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </ScrollView>
  );
};

export default Home;
