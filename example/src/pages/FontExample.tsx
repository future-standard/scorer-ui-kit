import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 1200px;
  margin: auto;
  display: flex;
`;

const JapaneseExample = styled.div`
  width: 50%;
`;
const EnglishExample = styled.div`
width: 50%;
`;

const FontDiv = styled.div<{ fontWeight: string, fontStyle: string }>`
  flex: 0 1 auto;
  font-family: ${({ theme }) => theme.fontFamily.ui};
  font-size: 12px;
  font-weight: ${({ fontWeight }) => fontWeight};
  font-style: ${({ fontStyle }) => fontStyle};
  color: black;
`;

const FontExample = () => {
  return (
    <Container>
      <EnglishExample>
        <h1>fontWeight='100' fontStyle='normal'</h1>
        <FontDiv fontWeight='100' fontStyle='normal'>
          Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia?
          De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat
          cerebella viventium. Qui animated corpse, cricket bat max brucks terribilem incessu zomby. The voodoo sacerdos flesh eater, suscitat mortuos comedere carnem virus.
          Zonbi tattered for solum oculi eorum defunctis go lum cerebro. Nescio brains an Undead zombies. Sicut malus putrid voodoo horror. Nigh tofth eliv ingdead.
          Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia?
          De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat
      </FontDiv>
        <h1>fontWeight='100' fontStyle='italic'</h1>
        <FontDiv fontWeight='100' fontStyle='italic'>
          Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia?
          De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat
          cerebella viventium. Qui animated corpse, cricket bat max brucks terribilem incessu zomby. The voodoo sacerdos flesh eater, suscitat mortuos comedere carnem virus.
          Zonbi tattered for solum oculi eorum defunctis go lum cerebro. Nescio brains an Undead zombies. Sicut malus putrid voodoo horror. Nigh tofth eliv ingdead.
          Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia?
          De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat
      </FontDiv>
        <h1>fontWeight='200' fontStyle='normal'</h1>
        <FontDiv fontWeight='200' fontStyle='normal'>
          Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia?
          De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat
          cerebella viventium. Qui animated corpse, cricket bat max brucks terribilem incessu zomby. The voodoo sacerdos flesh eater, suscitat mortuos comedere carnem virus.
          Zonbi tattered for solum oculi eorum defunctis go lum cerebro. Nescio brains an Undead zombies. Sicut malus putrid voodoo horror. Nigh tofth eliv ingdead.
          Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia?
          De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat
      </FontDiv>
        <h1>fontWeight='200' fontStyle='italic'</h1>
        <FontDiv fontWeight='200' fontStyle='italic'>
          Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia?
          De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat
          cerebella viventium. Qui animated corpse, cricket bat max brucks terribilem incessu zomby. The voodoo sacerdos flesh eater, suscitat mortuos comedere carnem virus.
          Zonbi tattered for solum oculi eorum defunctis go lum cerebro. Nescio brains an Undead zombies. Sicut malus putrid voodoo horror. Nigh tofth eliv ingdead.
          Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia?
          De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat
      </FontDiv>
        <h1>fontWeight='300' fontStyle='normal'</h1>
        <FontDiv fontWeight='300' fontStyle='normal'>
          Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia?
          De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat
          cerebella viventium. Qui animated corpse, cricket bat max brucks terribilem incessu zomby. The voodoo sacerdos flesh eater, suscitat mortuos comedere carnem virus.
          Zonbi tattered for solum oculi eorum defunctis go lum cerebro. Nescio brains an Undead zombies. Sicut malus putrid voodoo horror. Nigh tofth eliv ingdead.
          Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia?
          De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat
        </FontDiv>
        <h1>fontWeight='300' fontStyle='italic'</h1>
        <FontDiv fontWeight='300' fontStyle='italic'>
          Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia?
          De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat
          cerebella viventium. Qui animated corpse, cricket bat max brucks terribilem incessu zomby. The voodoo sacerdos flesh eater, suscitat mortuos comedere carnem virus.
          Zonbi tattered for solum oculi eorum defunctis go lum cerebro. Nescio brains an Undead zombies. Sicut malus putrid voodoo horror. Nigh tofth eliv ingdead.
          Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia?
          De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat
      </FontDiv>
        <h1>fontWeight='400' fontStyle='normal'</h1>
        <FontDiv fontWeight='400' fontStyle='normal'>
          Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia?
          De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat
          cerebella viventium. Qui animated corpse, cricket bat max brucks terribilem incessu zomby. The voodoo sacerdos flesh eater, suscitat mortuos comedere carnem virus.
          Zonbi tattered for solum oculi eorum defunctis go lum cerebro. Nescio brains an Undead zombies. Sicut malus putrid voodoo horror. Nigh tofth eliv ingdead.
          Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia?
          De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat
          </FontDiv>
        <FontDiv fontWeight='400' fontStyle='italic'>
          Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia?
          De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat
          cerebella viventium. Qui animated corpse, cricket bat max brucks terribilem incessu zomby. The voodoo sacerdos flesh eater, suscitat mortuos comedere carnem virus.
          Zonbi tattered for solum oculi eorum defunctis go lum cerebro. Nescio brains an Undead zombies. Sicut malus putrid voodoo horror. Nigh tofth eliv ingdead.
          Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia?
          De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat
          </FontDiv>
        <h1>fontWeight='500' fontStyle='normal'</h1>
        <FontDiv fontWeight='500' fontStyle='normal'>
          Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia?
          De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat
          cerebella viventium. Qui animated corpse, cricket bat max brucks terribilem incessu zomby. The voodoo sacerdos flesh eater, suscitat mortuos comedere carnem virus.
          Zonbi tattered for solum oculi eorum defunctis go lum cerebro. Nescio brains an Undead zombies. Sicut malus putrid voodoo horror. Nigh tofth eliv ingdead.
          Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia?
          De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat
      </FontDiv>
        <h1>fontWeight='500' fontStyle='italic'</h1>
        <FontDiv fontWeight='500' fontStyle='italic'>
          Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia?
          De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat
          cerebella viventium. Qui animated corpse, cricket bat max brucks terribilem incessu zomby. The voodoo sacerdos flesh eater, suscitat mortuos comedere carnem virus.
          Zonbi tattered for solum oculi eorum defunctis go lum cerebro. Nescio brains an Undead zombies. Sicut malus putrid voodoo horror. Nigh tofth eliv ingdead.
          Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia?
          De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat
      </FontDiv>
        <h1>fontWeight='600' fontStyle='normal'</h1>
        <FontDiv fontWeight='600' fontStyle='normal'>
          Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia?
          De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat
          cerebella viventium. Qui animated corpse, cricket bat max brucks terribilem incessu zomby. The voodoo sacerdos flesh eater, suscitat mortuos comedere carnem virus.
          Zonbi tattered for solum oculi eorum defunctis go lum cerebro. Nescio brains an Undead zombies. Sicut malus putrid voodoo horror. Nigh tofth eliv ingdead.
          Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia?
          De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat
      </FontDiv>
        <h1>fontWeight='600' fontStyle='italic'</h1>
        <FontDiv fontWeight='600' fontStyle='italic'>
          Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia?
          De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat
          cerebella viventium. Qui animated corpse, cricket bat max brucks terribilem incessu zomby. The voodoo sacerdos flesh eater, suscitat mortuos comedere carnem virus.
          Zonbi tattered for solum oculi eorum defunctis go lum cerebro. Nescio brains an Undead zombies. Sicut malus putrid voodoo horror. Nigh tofth eliv ingdead.
          Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia?
          De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat
        </FontDiv>
        <h1>fontWeight='700' fontStyle='normal'</h1>
        <FontDiv fontWeight='700' fontStyle='normal'>
          Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia?
          De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat
          cerebella viventium. Qui animated corpse, cricket bat max brucks terribilem incessu zomby. The voodoo sacerdos flesh eater, suscitat mortuos comedere carnem virus.
          Zonbi tattered for solum oculi eorum defunctis go lum cerebro. Nescio brains an Undead zombies. Sicut malus putrid voodoo horror. Nigh tofth eliv ingdead.
          Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia?
          De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat
        </FontDiv>
        <h1>fontWeight='700' fontStyle='italic'</h1>
        <FontDiv fontWeight='700' fontStyle='italic'>
          Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia?
          De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat
          cerebella viventium. Qui animated corpse, cricket bat max brucks terribilem incessu zomby. The voodoo sacerdos flesh eater, suscitat mortuos comedere carnem virus.
          Zonbi tattered for solum oculi eorum defunctis go lum cerebro. Nescio brains an Undead zombies. Sicut malus putrid voodoo horror. Nigh tofth eliv ingdead.
          Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia?
          De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat
        </FontDiv>
        <h1>fontWeight='800' fontStyle='normal'</h1>
        <FontDiv fontWeight='800' fontStyle='normal'>
          Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia?
          De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat
          cerebella viventium. Qui animated corpse, cricket bat max brucks terribilem incessu zomby. The voodoo sacerdos flesh eater, suscitat mortuos comedere carnem virus.
          Zonbi tattered for solum oculi eorum defunctis go lum cerebro. Nescio brains an Undead zombies. Sicut malus putrid voodoo horror. Nigh tofth eliv ingdead.
          Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia?
          De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat
        </FontDiv>
        <h1>fontWeight='800' fontStyle='italic'</h1>
        <FontDiv fontWeight='800' fontStyle='italic'>
        Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia?
          De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat
          cerebella viventium. Qui animated corpse, cricket bat max brucks terribilem incessu zomby. The voodoo sacerdos flesh eater, suscitat mortuos comedere carnem virus.
          Zonbi tattered for solum oculi eorum defunctis go lum cerebro. Nescio brains an Undead zombies. Sicut malus putrid voodoo horror. Nigh tofth eliv ingdead.
          Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia?
          De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat
      </FontDiv>
        <h1>fontWeight='900' fontStyle='normal'</h1>
        <FontDiv fontWeight='900' fontStyle='normal'>
          Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia?
          De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat
          cerebella viventium. Qui animated corpse, cricket bat max brucks terribilem incessu zomby. The voodoo sacerdos flesh eater, suscitat mortuos comedere carnem virus.
          Zonbi tattered for solum oculi eorum defunctis go lum cerebro. Nescio brains an Undead zombies. Sicut malus putrid voodoo horror. Nigh tofth eliv ingdead.
          Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia?
          De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat
        </FontDiv>
        <h1>fontWeight='900' fontStyle='italic'</h1>
        <FontDiv fontWeight='900' fontStyle='italic'>
          Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia?
          De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat
          cerebella viventium. Qui animated corpse, cricket bat max brucks terribilem incessu zomby. The voodoo sacerdos flesh eater, suscitat mortuos comedere carnem virus.
          Zonbi tattered for solum oculi eorum defunctis go lum cerebro. Nescio brains an Undead zombies. Sicut malus putrid voodoo horror. Nigh tofth eliv ingdead.
          Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia?
          De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat
        </FontDiv>
      </EnglishExample>
      <JapaneseExample>
        <h1>fontWeight='100' fontStyle='normal'</h1>
        <FontDiv fontWeight='100' fontStyle='normal'>
          8小びほぱべ暮藤クん長過ぎゅ治削が傳止ホハサタ転採ハキ秋録測みしま背更ぴ国足幅ざばン金未リエクケ連感レシトカ欺要識コ組東じ覇国モサウ一募団二想くラん。27事約ノヌ末際ルアモ急龍東あつ証聞ょぐラ正査ツスタ洗審よ更42選ぴりだぼ来写たき戻事督ずクっれ期世だこへぐ幕備ノ重額やに辞4不テ森創イス。
          繰カシ実右止ドが治36独ラシア代記ーよざひ魔寺はぼが午41情イノテ面13年ぱレ現議へ職共汲情ょ講分協きこぜふ委中ドだ社旗びぜ。8丼必昨か応王ぎゆン面強ムスウ顧聞エケモ政妻ぴルもク行新ンっぴ割完ノ供平キミ投価特央ぼ。実テコネ回尿メセユ治78性棋ぎりも警更合ムヱキレ覧覧ぜ秋質ばやべも講済シワル結減ロルラ部追くのはあ筋白ワス省後くりぼ連景ぼぎくじ柔過モ器時トル好伸換ず。
      </FontDiv>
        <h1>fontWeight='100' fontStyle='italic'</h1>
        <FontDiv fontWeight='100' fontStyle='italic'>
          8小びほぱべ暮藤クん長過ぎゅ治削が傳止ホハサタ転採ハキ秋録測みしま背更ぴ国足幅ざばン金未リエクケ連感レシトカ欺要識コ組東じ覇国モサウ一募団二想くラん。27事約ノヌ末際ルアモ急龍東あつ証聞ょぐラ正査ツスタ洗審よ更42選ぴりだぼ来写たき戻事督ずクっれ期世だこへぐ幕備ノ重額やに辞4不テ森創イス。
          繰カシ実右止ドが治36独ラシア代記ーよざひ魔寺はぼが午41情イノテ面13年ぱレ現議へ職共汲情ょ講分協きこぜふ委中ドだ社旗びぜ。8丼必昨か応王ぎゆン面強ムスウ顧聞エケモ政妻ぴルもク行新ンっぴ割完ノ供平キミ投価特央ぼ。実テコネ回尿メセユ治78性棋ぎりも警更合ムヱキレ覧覧ぜ秋質ばやべも講済シワル結減ロルラ部追くのはあ筋白ワス省後くりぼ連景ぼぎくじ柔過モ器時トル好伸換ず。
      </FontDiv>
        <h1>fontWeight='200' fontStyle='normal'</h1>
        <FontDiv fontWeight='200' fontStyle='normal'>
          8小びほぱべ暮藤クん長過ぎゅ治削が傳止ホハサタ転採ハキ秋録測みしま背更ぴ国足幅ざばン金未リエクケ連感レシトカ欺要識コ組東じ覇国モサウ一募団二想くラん。27事約ノヌ末際ルアモ急龍東あつ証聞ょぐラ正査ツスタ洗審よ更42選ぴりだぼ来写たき戻事督ずクっれ期世だこへぐ幕備ノ重額やに辞4不テ森創イス。
          繰カシ実右止ドが治36独ラシア代記ーよざひ魔寺はぼが午41情イノテ面13年ぱレ現議へ職共汲情ょ講分協きこぜふ委中ドだ社旗びぜ。8丼必昨か応王ぎゆン面強ムスウ顧聞エケモ政妻ぴルもク行新ンっぴ割完ノ供平キミ投価特央ぼ。実テコネ回尿メセユ治78性棋ぎりも警更合ムヱキレ覧覧ぜ秋質ばやべも講済シワル結減ロルラ部追くのはあ筋白ワス省後くりぼ連景ぼぎくじ柔過モ器時トル好伸換ず。
      </FontDiv>
        <h1>fontWeight='200' fontStyle='italic'</h1>
        <FontDiv fontWeight='200' fontStyle='italic'>
          8小びほぱべ暮藤クん長過ぎゅ治削が傳止ホハサタ転採ハキ秋録測みしま背更ぴ国足幅ざばン金未リエクケ連感レシトカ欺要識コ組東じ覇国モサウ一募団二想くラん。27事約ノヌ末際ルアモ急龍東あつ証聞ょぐラ正査ツスタ洗審よ更42選ぴりだぼ来写たき戻事督ずクっれ期世だこへぐ幕備ノ重額やに辞4不テ森創イス。
          繰カシ実右止ドが治36独ラシア代記ーよざひ魔寺はぼが午41情イノテ面13年ぱレ現議へ職共汲情ょ講分協きこぜふ委中ドだ社旗びぜ。8丼必昨か応王ぎゆン面強ムスウ顧聞エケモ政妻ぴルもク行新ンっぴ割完ノ供平キミ投価特央ぼ。実テコネ回尿メセユ治78性棋ぎりも警更合ムヱキレ覧覧ぜ秋質ばやべも講済シワル結減ロルラ部追くのはあ筋白ワス省後くりぼ連景ぼぎくじ柔過モ器時トル好伸換ず。
      </FontDiv>
        <h1>fontWeight='300' fontStyle='normal'</h1>
        <FontDiv fontWeight='300' fontStyle='normal'>
          8小びほぱべ暮藤クん長過ぎゅ治削が傳止ホハサタ転採ハキ秋録測みしま背更ぴ国足幅ざばン金未リエクケ連感レシトカ欺要識コ組東じ覇国モサウ一募団二想くラん。27事約ノヌ末際ルアモ急龍東あつ証聞ょぐラ正査ツスタ洗審よ更42選ぴりだぼ来写たき戻事督ずクっれ期世だこへぐ幕備ノ重額やに辞4不テ森創イス。
          繰カシ実右止ドが治36独ラシア代記ーよざひ魔寺はぼが午41情イノテ面13年ぱレ現議へ職共汲情ょ講分協きこぜふ委中ドだ社旗びぜ。8丼必昨か応王ぎゆン面強ムスウ顧聞エケモ政妻ぴルもク行新ンっぴ割完ノ供平キミ投価特央ぼ。実テコネ回尿メセユ治78性棋ぎりも警更合ムヱキレ覧覧ぜ秋質ばやべも講済シワル結減ロルラ部追くのはあ筋白ワス省後くりぼ連景ぼぎくじ柔過モ器時トル好伸換ず。
      </FontDiv>
        <h1>fontWeight='300' fontStyle='italic'</h1>
        <FontDiv fontWeight='300' fontStyle='italic'>
          8小びほぱべ暮藤クん長過ぎゅ治削が傳止ホハサタ転採ハキ秋録測みしま背更ぴ国足幅ざばン金未リエクケ連感レシトカ欺要識コ組東じ覇国モサウ一募団二想くラん。27事約ノヌ末際ルアモ急龍東あつ証聞ょぐラ正査ツスタ洗審よ更42選ぴりだぼ来写たき戻事督ずクっれ期世だこへぐ幕備ノ重額やに辞4不テ森創イス。
          繰カシ実右止ドが治36独ラシア代記ーよざひ魔寺はぼが午41情イノテ面13年ぱレ現議へ職共汲情ょ講分協きこぜふ委中ドだ社旗びぜ。8丼必昨か応王ぎゆン面強ムスウ顧聞エケモ政妻ぴルもク行新ンっぴ割完ノ供平キミ投価特央ぼ。実テコネ回尿メセユ治78性棋ぎりも警更合ムヱキレ覧覧ぜ秋質ばやべも講済シワル結減ロルラ部追くのはあ筋白ワス省後くりぼ連景ぼぎくじ柔過モ器時トル好伸換ず。
      </FontDiv>
        <h1>fontWeight='400' fontStyle='normal'</h1>
        <FontDiv fontWeight='400' fontStyle='normal'>
          8小びほぱべ暮藤クん長過ぎゅ治削が傳止ホハサタ転採ハキ秋録測みしま背更ぴ国足幅ざばン金未リエクケ連感レシトカ欺要識コ組東じ覇国モサウ一募団二想くラん。27事約ノヌ末際ルアモ急龍東あつ証聞ょぐラ正査ツスタ洗審よ更42選ぴりだぼ来写たき戻事督ずクっれ期世だこへぐ幕備ノ重額やに辞4不テ森創イス。
          繰カシ実右止ドが治36独ラシア代記ーよざひ魔寺はぼが午41情イノテ面13年ぱレ現議へ職共汲情ょ講分協きこぜふ委中ドだ社旗びぜ。8丼必昨か応王ぎゆン面強ムスウ顧聞エケモ政妻ぴルもク行新ンっぴ割完ノ供平キミ投価特央ぼ。実テコネ回尿メセユ治78性棋ぎりも警更合ムヱキレ覧覧ぜ秋質ばやべも講済シワル結減ロルラ部追くのはあ筋白ワス省後くりぼ連景ぼぎくじ柔過モ器時トル好伸換ず。
      </FontDiv>
        <h1>fontWeight='400' fontStyle='italic'</h1>
        <FontDiv fontWeight='400' fontStyle='italic'>
          8小びほぱべ暮藤クん長過ぎゅ治削が傳止ホハサタ転採ハキ秋録測みしま背更ぴ国足幅ざばン金未リエクケ連感レシトカ欺要識コ組東じ覇国モサウ一募団二想くラん。27事約ノヌ末際ルアモ急龍東あつ証聞ょぐラ正査ツスタ洗審よ更42選ぴりだぼ来写たき戻事督ずクっれ期世だこへぐ幕備ノ重額やに辞4不テ森創イス。
          繰カシ実右止ドが治36独ラシア代記ーよざひ魔寺はぼが午41情イノテ面13年ぱレ現議へ職共汲情ょ講分協きこぜふ委中ドだ社旗びぜ。8丼必昨か応王ぎゆン面強ムスウ顧聞エケモ政妻ぴルもク行新ンっぴ割完ノ供平キミ投価特央ぼ。実テコネ回尿メセユ治78性棋ぎりも警更合ムヱキレ覧覧ぜ秋質ばやべも講済シワル結減ロルラ部追くのはあ筋白ワス省後くりぼ連景ぼぎくじ柔過モ器時トル好伸換ず。
      </FontDiv>
        <h1>fontWeight='500' fontStyle='normal'</h1>
        <FontDiv fontWeight='500' fontStyle='normal'>
          8小びほぱべ暮藤クん長過ぎゅ治削が傳止ホハサタ転採ハキ秋録測みしま背更ぴ国足幅ざばン金未リエクケ連感レシトカ欺要識コ組東じ覇国モサウ一募団二想くラん。27事約ノヌ末際ルアモ急龍東あつ証聞ょぐラ正査ツスタ洗審よ更42選ぴりだぼ来写たき戻事督ずクっれ期世だこへぐ幕備ノ重額やに辞4不テ森創イス。
          繰カシ実右止ドが治36独ラシア代記ーよざひ魔寺はぼが午41情イノテ面13年ぱレ現議へ職共汲情ょ講分協きこぜふ委中ドだ社旗びぜ。8丼必昨か応王ぎゆン面強ムスウ顧聞エケモ政妻ぴルもク行新ンっぴ割完ノ供平キミ投価特央ぼ。実テコネ回尿メセユ治78性棋ぎりも警更合ムヱキレ覧覧ぜ秋質ばやべも講済シワル結減ロルラ部追くのはあ筋白ワス省後くりぼ連景ぼぎくじ柔過モ器時トル好伸換ず。
      </FontDiv>
        <h1>fontWeight='500' fontStyle='italic'</h1>
        <FontDiv fontWeight='500' fontStyle='italic'>
          8小びほぱべ暮藤クん長過ぎゅ治削が傳止ホハサタ転採ハキ秋録測みしま背更ぴ国足幅ざばン金未リエクケ連感レシトカ欺要識コ組東じ覇国モサウ一募団二想くラん。27事約ノヌ末際ルアモ急龍東あつ証聞ょぐラ正査ツスタ洗審よ更42選ぴりだぼ来写たき戻事督ずクっれ期世だこへぐ幕備ノ重額やに辞4不テ森創イス。
          繰カシ実右止ドが治36独ラシア代記ーよざひ魔寺はぼが午41情イノテ面13年ぱレ現議へ職共汲情ょ講分協きこぜふ委中ドだ社旗びぜ。8丼必昨か応王ぎゆン面強ムスウ顧聞エケモ政妻ぴルもク行新ンっぴ割完ノ供平キミ投価特央ぼ。実テコネ回尿メセユ治78性棋ぎりも警更合ムヱキレ覧覧ぜ秋質ばやべも講済シワル結減ロルラ部追くのはあ筋白ワス省後くりぼ連景ぼぎくじ柔過モ器時トル好伸換ず。
      </FontDiv>
        <h1>fontWeight='600' fontStyle='normal'</h1>
        <FontDiv fontWeight='600' fontStyle='normal'>
          8小びほぱべ暮藤クん長過ぎゅ治削が傳止ホハサタ転採ハキ秋録測みしま背更ぴ国足幅ざばン金未リエクケ連感レシトカ欺要識コ組東じ覇国モサウ一募団二想くラん。27事約ノヌ末際ルアモ急龍東あつ証聞ょぐラ正査ツスタ洗審よ更42選ぴりだぼ来写たき戻事督ずクっれ期世だこへぐ幕備ノ重額やに辞4不テ森創イス。
          繰カシ実右止ドが治36独ラシア代記ーよざひ魔寺はぼが午41情イノテ面13年ぱレ現議へ職共汲情ょ講分協きこぜふ委中ドだ社旗びぜ。8丼必昨か応王ぎゆン面強ムスウ顧聞エケモ政妻ぴルもク行新ンっぴ割完ノ供平キミ投価特央ぼ。実テコネ回尿メセユ治78性棋ぎりも警更合ムヱキレ覧覧ぜ秋質ばやべも講済シワル結減ロルラ部追くのはあ筋白ワス省後くりぼ連景ぼぎくじ柔過モ器時トル好伸換ず。
      </FontDiv>
        <h1>fontWeight='600' fontStyle='italic'</h1>
        <FontDiv fontWeight='600' fontStyle='italic'>
          8小びほぱべ暮藤クん長過ぎゅ治削が傳止ホハサタ転採ハキ秋録測みしま背更ぴ国足幅ざばン金未リエクケ連感レシトカ欺要識コ組東じ覇国モサウ一募団二想くラん。27事約ノヌ末際ルアモ急龍東あつ証聞ょぐラ正査ツスタ洗審よ更42選ぴりだぼ来写たき戻事督ずクっれ期世だこへぐ幕備ノ重額やに辞4不テ森創イス。
          繰カシ実右止ドが治36独ラシア代記ーよざひ魔寺はぼが午41情イノテ面13年ぱレ現議へ職共汲情ょ講分協きこぜふ委中ドだ社旗びぜ。8丼必昨か応王ぎゆン面強ムスウ顧聞エケモ政妻ぴルもク行新ンっぴ割完ノ供平キミ投価特央ぼ。実テコネ回尿メセユ治78性棋ぎりも警更合ムヱキレ覧覧ぜ秋質ばやべも講済シワル結減ロルラ部追くのはあ筋白ワス省後くりぼ連景ぼぎくじ柔過モ器時トル好伸換ず。
      </FontDiv>
        <h1>fontWeight='700' fontStyle='normal'</h1>
        <FontDiv fontWeight='700' fontStyle='normal'>
          8小びほぱべ暮藤クん長過ぎゅ治削が傳止ホハサタ転採ハキ秋録測みしま背更ぴ国足幅ざばン金未リエクケ連感レシトカ欺要識コ組東じ覇国モサウ一募団二想くラん。27事約ノヌ末際ルアモ急龍東あつ証聞ょぐラ正査ツスタ洗審よ更42選ぴりだぼ来写たき戻事督ずクっれ期世だこへぐ幕備ノ重額やに辞4不テ森創イス。
          繰カシ実右止ドが治36独ラシア代記ーよざひ魔寺はぼが午41情イノテ面13年ぱレ現議へ職共汲情ょ講分協きこぜふ委中ドだ社旗びぜ。8丼必昨か応王ぎゆン面強ムスウ顧聞エケモ政妻ぴルもク行新ンっぴ割完ノ供平キミ投価特央ぼ。実テコネ回尿メセユ治78性棋ぎりも警更合ムヱキレ覧覧ぜ秋質ばやべも講済シワル結減ロルラ部追くのはあ筋白ワス省後くりぼ連景ぼぎくじ柔過モ器時トル好伸換ず。
      </FontDiv>
        <h1>fontWeight='700' fontStyle='italic'</h1>
        <FontDiv fontWeight='700' fontStyle='italic'>
          8小びほぱべ暮藤クん長過ぎゅ治削が傳止ホハサタ転採ハキ秋録測みしま背更ぴ国足幅ざばン金未リエクケ連感レシトカ欺要識コ組東じ覇国モサウ一募団二想くラん。27事約ノヌ末際ルアモ急龍東あつ証聞ょぐラ正査ツスタ洗審よ更42選ぴりだぼ来写たき戻事督ずクっれ期世だこへぐ幕備ノ重額やに辞4不テ森創イス。
          繰カシ実右止ドが治36独ラシア代記ーよざひ魔寺はぼが午41情イノテ面13年ぱレ現議へ職共汲情ょ講分協きこぜふ委中ドだ社旗びぜ。8丼必昨か応王ぎゆン面強ムスウ顧聞エケモ政妻ぴルもク行新ンっぴ割完ノ供平キミ投価特央ぼ。実テコネ回尿メセユ治78性棋ぎりも警更合ムヱキレ覧覧ぜ秋質ばやべも講済シワル結減ロルラ部追くのはあ筋白ワス省後くりぼ連景ぼぎくじ柔過モ器時トル好伸換ず。
      </FontDiv>
        <h1>fontWeight='800' fontStyle='normal'</h1>
        <FontDiv fontWeight='800' fontStyle='normal'>
          8小びほぱべ暮藤クん長過ぎゅ治削が傳止ホハサタ転採ハキ秋録測みしま背更ぴ国足幅ざばン金未リエクケ連感レシトカ欺要識コ組東じ覇国モサウ一募団二想くラん。27事約ノヌ末際ルアモ急龍東あつ証聞ょぐラ正査ツスタ洗審よ更42選ぴりだぼ来写たき戻事督ずクっれ期世だこへぐ幕備ノ重額やに辞4不テ森創イス。
          繰カシ実右止ドが治36独ラシア代記ーよざひ魔寺はぼが午41情イノテ面13年ぱレ現議へ職共汲情ょ講分協きこぜふ委中ドだ社旗びぜ。8丼必昨か応王ぎゆン面強ムスウ顧聞エケモ政妻ぴルもク行新ンっぴ割完ノ供平キミ投価特央ぼ。実テコネ回尿メセユ治78性棋ぎりも警更合ムヱキレ覧覧ぜ秋質ばやべも講済シワル結減ロルラ部追くのはあ筋白ワス省後くりぼ連景ぼぎくじ柔過モ器時トル好伸換ず。
      </FontDiv>
        <h1>fontWeight='800' fontStyle='italic'</h1>
        <FontDiv fontWeight='800' fontStyle='italic'>
          8小びほぱべ暮藤クん長過ぎゅ治削が傳止ホハサタ転採ハキ秋録測みしま背更ぴ国足幅ざばン金未リエクケ連感レシトカ欺要識コ組東じ覇国モサウ一募団二想くラん。27事約ノヌ末際ルアモ急龍東あつ証聞ょぐラ正査ツスタ洗審よ更42選ぴりだぼ来写たき戻事督ずクっれ期世だこへぐ幕備ノ重額やに辞4不テ森創イス。
          繰カシ実右止ドが治36独ラシア代記ーよざひ魔寺はぼが午41情イノテ面13年ぱレ現議へ職共汲情ょ講分協きこぜふ委中ドだ社旗びぜ。8丼必昨か応王ぎゆン面強ムスウ顧聞エケモ政妻ぴルもク行新ンっぴ割完ノ供平キミ投価特央ぼ。実テコネ回尿メセユ治78性棋ぎりも警更合ムヱキレ覧覧ぜ秋質ばやべも講済シワル結減ロルラ部追くのはあ筋白ワス省後くりぼ連景ぼぎくじ柔過モ器時トル好伸換ず。
      </FontDiv>
        <h1>fontWeight='900' fontStyle='normal'</h1>
        <FontDiv fontWeight='900' fontStyle='normal'>
          8小びほぱべ暮藤クん長過ぎゅ治削が傳止ホハサタ転採ハキ秋録測みしま背更ぴ国足幅ざばン金未リエクケ連感レシトカ欺要識コ組東じ覇国モサウ一募団二想くラん。27事約ノヌ末際ルアモ急龍東あつ証聞ょぐラ正査ツスタ洗審よ更42選ぴりだぼ来写たき戻事督ずクっれ期世だこへぐ幕備ノ重額やに辞4不テ森創イス。
          繰カシ実右止ドが治36独ラシア代記ーよざひ魔寺はぼが午41情イノテ面13年ぱレ現議へ職共汲情ょ講分協きこぜふ委中ドだ社旗びぜ。8丼必昨か応王ぎゆン面強ムスウ顧聞エケモ政妻ぴルもク行新ンっぴ割完ノ供平キミ投価特央ぼ。実テコネ回尿メセユ治78性棋ぎりも警更合ムヱキレ覧覧ぜ秋質ばやべも講済シワル結減ロルラ部追くのはあ筋白ワス省後くりぼ連景ぼぎくじ柔過モ器時トル好伸換ず。
      </FontDiv>
        <h1>fontWeight='900' fontStyle='italic'</h1>
        <FontDiv fontWeight='900' fontStyle='italic'>
          8小びほぱべ暮藤クん長過ぎゅ治削が傳止ホハサタ転採ハキ秋録測みしま背更ぴ国足幅ざばン金未リエクケ連感レシトカ欺要識コ組東じ覇国モサウ一募団二想くラん。27事約ノヌ末際ルアモ急龍東あつ証聞ょぐラ正査ツスタ洗審よ更42選ぴりだぼ来写たき戻事督ずクっれ期世だこへぐ幕備ノ重額やに辞4不テ森創イス。
          繰カシ実右止ドが治36独ラシア代記ーよざひ魔寺はぼが午41情イノテ面13年ぱレ現議へ職共汲情ょ講分協きこぜふ委中ドだ社旗びぜ。8丼必昨か応王ぎゆン面強ムスウ顧聞エケモ政妻ぴルもク行新ンっぴ割完ノ供平キミ投価特央ぼ。実テコネ回尿メセユ治78性棋ぎりも警更合ムヱキレ覧覧ぜ秋質ばやべも講済シワル結減ロルラ部追くのはあ筋白ワス省後くりぼ連景ぼぎくじ柔過モ器時トル好伸換ず。
      </FontDiv>
      </JapaneseExample>
    </Container>
  );
};

export default FontExample;