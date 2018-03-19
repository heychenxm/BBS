import React, {Component} from 'react';

import '../assets/styles/homePage.less';

import {
  Container,
  Slider,
  Grid,
  Col,
  Group,
  List
} from 'amazeui-touch';

import HeaderBar from '../components/HeaderBar';

class HomePage extends Component {
  render() {
    const sliderIntance = (
      <Slider
      >
        <Slider.Item>
          <img
            src="http://s.amazeui.org/media/i/demos/bing-1.jpg" />
        </Slider.Item>
        <Slider.Item>
          <img
          src="http://s.amazeui.org/media/i/demos/bing-2.jpg" />
        </Slider.Item>
        <Slider.Item>
          <img
            src="http://s.amazeui.org/media/i/demos/bing-3.jpg" />
        </Slider.Item>
        <Slider.Item>
          <img
            src="http://s.amazeui.org/media/i/demos/bing-4.jpg" />
        </Slider.Item>
      </Slider>
    );

    /*
    *  8大特色
    * */
    var feature1='../assets/images/feature_1.png';
    var feature2='../assets/images/feature_2.png';
    var feature3='../assets/images/feature_3.png';
    var feature4='../assets/images/feature_4.png';
    var feature5='../assets/images/feature_5.png';
    var feature6='../assets/images/feature_6.png';
    var feature7='../assets/images/feature_7.png';
    var feature8='../assets/images/feature_8.png';

    const features = (
      <Grid avg={4}  className='features'>
        <Col>
          <img src={feature1} alt="8大特色"/>
          <p>周边</p>
        </Col>
        <Col>
          <img src={feature2} alt="8大特色"/>
          <p>外卖</p>
        </Col>
        <Col>
          <img src={feature3} alt="8大特色"/>
          <p>生活超市</p>
        </Col>
        <Col>
          <img src={feature4} alt="8大特色"/>
          <p>团购</p>
        </Col>
        <Col>
          <img src={feature5} alt="8大特色"/>
          <p>积分商城</p>
        </Col>
        <Col>
          <img src={feature6} alt="8大特色"/>
          <p>热卖</p>
        </Col>
        <Col>
          <img src={feature7} alt="8大特色"/>
          <p>新店推荐</p>
        </Col>
        <Col>
          <img src={feature8} alt="8大特色"/>
          <p>活动</p>
        </Col>
      </Grid>
    );

    /*
    * 广告
    * */
    var adv1=require('../assets/images/adv1.png');
    var adv2=require('../assets/images/adv2.png');
    var adv3=require('../assets/images/adv3.png');
    const advs = (
      <Grid  className='advs'>
        <Col cols={2}>
          <img src={adv1} alt=""/>
        </Col>
        <Col cols={2}>
          <img src={adv2} alt=""/>
        </Col>
        <Col cols={2}>
          <img src={adv3} alt=""/>
        </Col>
      </Grid>
    );

    /*
    *  猜你喜欢列表
    * */
    const img40 = <img width="48" src="http://lorempixel.com/160/160/people/" />;
    const albums = [
      {
        title: '女爵',
        subTitle: '发行公司：环球唱片',
        after: '2006-12',
        href: 'http://music.163.com/#/album?id=31308',
        desc: `
      她坦白了我们所虚伪的 她单纯了我们所复杂的
      五年以来…
      5年的等待，是个漫长也是耗损的过程。
      看尽乐坛芭比娃娃的甜美面具，「性格」这两个字，似乎快要消失！
      她的声音，她的个性，象徵著无可取代的高傲、独特的姿态，
      这样一股充满灵魂的音乐、沉寂而刚苏醒的真声音，
      是我们唯一相信且期待杨乃文的理由。`
      },
      {
        title: '第一张精选',
        subTitle: '发行公司：滚石唱片',
        after: '2004-01',
        href: 'http://music.163.com/#/album?id=31312',
        desc: `
        出道六年来只出过三张专辑的杨乃文，第一次集合三张专辑的精华构成了这张充满个性的精选辑。专辑收录尚未发片前首先曝光，原始浓烈的杨乃文独唱曲[爱上你只是我的错]、曾让无数人伤感落泪的《我给的爱》、悲情经典《silence》、杨乃文96年在魔岩校园live演唱会上敏感热烈的创作《fear》、充满古典优雅气质的电影[第凡内早餐]的主题曲《monn river》等好歌。通过尝试各种新鲜形象，搭配MV营造的氛围，总是给人耳目一新的新感觉。`
      },
      {
        title: 'Silence',
        subTitle: '发行公司：魔岩唱片',
        after: '1999-01',
        href: 'http://music.163.com/#/album?id=31319',
        desc: '所有人都能从作品中听到能量和震撼的呈现，矛盾与妥协，失意与快乐，制作人林炜哲是真正进入到歌手的灵魂，找出最真实的瞬间再燃烧释放，献给大家；这种完全认真作音乐不哈啦的态度，不是只字片语能形容，也并非速食文化所能比拟，这种精神是和全世界的音乐人同步，这也是他们的作品和台湾大部份截然不同的原因。这样的音乐正是台湾年轻人目前需要的，与世界处在同步潮流，所有年轻人都能感受的热情和力量'
      }
    ];
    const guessFav = (
      <Group
        className='guess-fav'
        header="猜你喜欢"
        noPadded
      >
        <List>
          {albums.map((album, i) => {
            return (
              <List.Item
                {...album}
                target="_blank"
                media={img40}
                desc={null}
                href={i === 0 ? null : album.href}
                key={i}
              />
            );
          })}
        </List>
      </Group>
    )

    return (
      <Container fill={true} className='home-page' direction='column'>
        <HeaderBar title='购物' search/>
        <Container scrollable={true}>
            {sliderIntance}
            {features}
            {advs}
            {guessFav}
        </Container>
      </Container>
    );
  }
}

HomePage.propTypes = {};
HomePage.defaultProps = {};

export default HomePage;


/*
* 妹子UI组件使用步骤：
*   1、 引入
*   2、 在render中使用
* */
