import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import Line from './line';
import ViewTitle from './ViewTitle';
import ClassRatingStars from './ClassRatingStars';
class HorizontalScrollView extends Component{
  constructor(props){
    super(props);
    this.state = {};
  }
  render(){
    return(
      <View>
        <ViewTitle
          title={this.props.title}
          titleButton={this.props.showViewTitleButton}
        />
        <View>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            automaticallyAdjustContentInsets={false}
          >
            <View style={styles.cardList}>
              {
                this.props.itemList.map((item) => {
                return(
                  <TouchableOpacity
                    key={item.title}
                    style={styles.card}
                    onPress={()=>this.props.goToClassDetailPage(item)}
                  >
                    <Image
                      source={{uri:item.thumbnail_image}}
                      style={[styles.cardImg, {width: this.props.width, height: this.props.height}]}
                    />
                    <View style={[styles.cardContent, {width: this.props.width}]}>
                      <Text numberOfLines={this.props.classNameOneLine ? 2 : 1} style={{marginRight: 5, lineHeight: 20}}>
                        {item.title}
                      </Text>
                      <View style={styles.classRatingWrapper}>
                        {this.props.showRatingStars &&
                          <ClassRatingStars rating_stars={item.rating_stars} />
                        }
                        {this.props.showRatingNumber &&
                          <View>
                            <Text style={styles.classRatingNumberWrapper}>
                              <Text style={styles.classRatingNumber}>{item.Number_of_ratings} </Text>
                              人學習
                            </Text>
                          </View>
                        }
                      </View>
                      {this.props.showTags &&
                        <View style={styles.tagWrapper}>
                          {
                            item.tags.map((subitem) => {
                            return(
                              <View
                                key={subitem}
                                style={styles.tag}
                              >
                                <Text numberOfLines={1} style={styles.tagText}>{subitem}</Text>
                              </View>
                            )
                          })}
                        </View>
                      }
                    </View>
                  </TouchableOpacity>
                )
              })}
            </View>
          </ScrollView>
          <Line />
        </View>
      </View>
    )
  }
}
const styles = {
  cardList: {
    marginTop: 5,
    marginBottom: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginLeft: 12,
    justifyContent: 'space-between'
  },
  card:{
    marginRight: 12,
    overflow: 'hidden'
  },
  cardImg: {
    borderRadius: 5,
  },
  cardContent: {
    paddingVertical: 10,
  },
  classRatingWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  classRatingNumber: {
    color: 'rgb(90, 187, 214)',
    fontWeight: 'bold',
    fontSize: 16,
  },
  classRatingNumberWrapper: {
    color: 'rgb(90, 187, 214)',
    /*color: 'rgb(206, 206, 206)',*/
    fontSize: 12,
    marginRight: 10,
  },
  tagWrapper: {
    flexDirection: 'row',
    marginRight: 25,
    overflow: 'hidden',
  },
  tag: {
    borderStyle: 'solid',
    borderColor: '#D8D8D8',
    borderWidth: 0.5,
    marginVertical: 5,
    marginRight: 5,
  },
  tagText: {
    color: '#B5B5B5',
    fontSize: 12,
    paddingHorizontal: 10,
  }
}

export default HorizontalScrollView;