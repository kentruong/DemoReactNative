import React from 'react';
import { View, Text, Image, FlatList, StyleSheet } from 'react-native';
// import { Styles } from "../src/assets/css";

import ItemsHome from "../components/ItemsHome";
import IconAntDesign from 'react-native-vector-icons/AntDesign';
export default function Home() {
    const Items = ({ item }) => {
        return (
            <ItemsHome content={item} />
        )
    }
    return (
        <View style={styles.conteiner}>
            <View style={styles.logo}>
            {/* <Image style={Styles.imageLogo} source={require('../src/assets/images/pornhub.png')} /> */}
                <Text style={styles.logoPorn}>Porn</Text>
                <Text style={styles.logoHub}>hub</Text>
            </View>
            <View style={styles.titles}>
            <IconAntDesign style={styles.iconTitle} name="like1" color="#FF9800" size={20} />
                <Text style={styles.titleList}>Group Asia by Tran Quang Hoai</Text>
            </View>
            <FlatList
                data={[
                    { name: 'Maria Ozawa', link: 'https://khodohoa.vn/wp-content/uploads/2019/09/52173545_2293459274219264_3745613405151559680_o.jpg', time: '1 giây' },
                    { name: 'Mimi', link: 'https://khodohoa.vn/wp-content/uploads/2019/09/43274301034_fbc0e949a2_o.jpg', time: '2 giây' },
                    { name: 'Tsukasa-Aoi', link: 'https://khodohoa.vn/wp-content/uploads/2019/09/43087440165_4eb77e1a10_o.jpg', time: '3day' },
                    { name: 'Park Ki Ho', link: 'https://khodohoa.vn/wp-content/uploads/2019/09/43993075861_5d12e1bb0c_o.jpg', time: '56 phút' },
                    { name: 'Lee Youn Min', link: 'https://khodohoa.vn/wp-content/uploads/2019/09/42183822570_431c40ec7f_o.jpg', time: '3h' },
                    { name: 'Megi Fujiura', link: 'https://khodohoa.vn/wp-content/uploads/2019/09/32541591468_647cd72d04_h.jpg', time: '' },
                    { name: 'Akiho Yoshizawa', link: 'https://khodohoa.vn/wp-content/uploads/2019/09/45690393734_4eae1b2435_k.jpg', time: '' },
                    { name: 'Saori Hara', link: 'https://khodohoa.vn/wp-content/uploads/2019/09/43087481675_3969d2e92c_o.jpg', time: '' },
                    { name: 'Aizawa Minami', link: 'https://khodohoa.vn/wp-content/uploads/2019/09/32541602898_453ec1f646_k.jpg', time: '' },
                    { name: 'Eimi Fukada', link: 'https://khodohoa.vn/wp-content/uploads/2019/09/43944618752_743d974de6_o.jpg', time: '' },
                    { name: 'Ayano Nana', link: 'https://khodohoa.vn/wp-content/uploads/2019/09/52476594_673361356412645_5002462501162450944_o.jpg', time: '' },
                    { name: 'Takizawa laura', link: 'https://khodohoa.vn/wp-content/uploads/2019/09/52608987_2377191975625959_1978409266800754688_o.jpg', time: '' },
                    { name: 'Erika Momotani siêu khủng vòng 1,3', link: 'https://khodohoa.vn/wp-content/uploads/2019/09/52387600_318171622388076_6684015465393553408_o.jpg', time: '' },
                    { name: 'Min', link: 'https://khodohoa.vn/wp-content/uploads/2019/09/53435070_885583448444562_3877105714409242624_o.jpg', time: '' },
                    { name: 'Orange', link: 'https://khodohoa.vn/wp-content/uploads/2019/09/44326263482_48e7cf6acb_o.jpg', time: '' },
                    { name: 'Nozomi Sasaki', link: 'https://khodohoa.vn/wp-content/uploads/2019/09/44326263972_e3a21084b0_o.jpg', time: '' },
                    { name: 'Emiri Suzuhara', link: 'https://khodohoa.vn/wp-content/uploads/2019/09/44073659292_8b7dd442ae_o.jpg', time: '' },
                    { name: 'Tokuda', link: 'https://khodohoa.vn/wp-content/uploads/2019/09/43087767775_00c7ce2f47_o.jpg', time: '' },
                    { name: 'Kana Momonogi', link: 'https://khodohoa.vn/wp-content/uploads/2019/09/43087767355_c128281ebb_o.jpg', time: '' },
                    { name: 'Yoshizawa', link: 'https://khodohoa.vn/wp-content/uploads/2019/09/43944869572_23a113a9fb_o.jpg', time: '' },
                    { name: 'Arimura Nozomi', link: 'https://uploads-ssl.webflow.com/5c3ee017b511dc534cfd284b/5e981c2d238c41e1898e874d_z_DNRKNV5dLy6EfyYYv5pBZydAxCybuzxJVebqiD9RanYuxh87T2YtO5XprisL-TOcae1PI9AKv6m0_LVAAzo36-66D4qswajhl1t8k0eEKiwB9FjcFOmry-OfZn_uQZwCF4izMf.jpeg', time: '' },
                    { name: 'Koharu Suzuki', link: 'https://uploads-ssl.webflow.com/5c3ee017b511dc534cfd284b/5e981c2d5a13423e886e792e_m8EL2FtjIeYnVX6RnizhGZ22JkhZdSSQ4wDvrY33SVxs1-6_BTxby4eZOdLFJ5bPio4WKLjC8joLYSh3DoWu8LEp7M5evkNDJVWpozaHfYpJeLTfB5ygl3n0w518BRCCaWJR_O71.jpeg', time: '' },
                    { name: 'Yura Sakura', link: 'https://uploads-ssl.webflow.com/5c3ee017b511dc534cfd284b/5e981c2da1bf4064fe6477ff_NqfGHsEo3sZ-L_Sqv8BTAxH_vw8nRoQyl4WbwaOOutielK_wgtecbrx5VNp3XND_pWtY-CsOX8eww2IgPVl2yJrzI6vrDhS2-oqZt3iDaSFMJM0QNRJ90u0b85diyAfv-DmoLtEK.jpeg', time: '' },
                    { name: 'Shion Utsunomiya', link: 'https://uploads-ssl.webflow.com/5c3ee017b511dc534cfd284b/5e981c2b4e1665b339e25b94_2CijpQUkGLB1U95fir2uPy4wSWaUtzegfdIF5pWGV9_S2JMWUZ_e68OKTY081dpqVlVKqpL21dPk2xEDrZgh2TdzieRQHxTEatIiGAfuIy-CVGLfPpa9yJiF-Dav7WlapsF04naB.jpeg', time: '' },
                    { name: 'Hoài Quang Trần', link: 'https://anh.24h.com.vn/upload/3-2015/images/2015-09-08/1441709618-1441706318-1.jpg', time: '3h', time: '3h' },
                    { name: 'Nam Nguyễn', link: 'https://live.staticflickr.com/65535/49182256117_e2b8333487_h.jpg', time: '1h' },
                    { name: 'Khoa Trương', link: 'https://khodohoa.vn/wp-content/uploads/2019/09/30124647968_b3414caa6f_o.jpg', time: '6 phút' },
                    { name: 'Suzumiya Kotone', link: 'https://khodohoa.vn/wp-content/uploads/2019/09/44387790_339752183449114_8808347882458447872_o.jpg', time: '1h' },
                    { name: 'Le Danh Thach', link: 'https://khodohoa.vn/wp-content/uploads/2019/09/31303654508_4fbcd3fbf8_o.jpg', time: '3h' },
                    { name: 'Abe Mikako', link: 'https://khodohoa.vn/wp-content/uploads/2019/09/52476594_673361356412645_5002462501162450944_o.jpg', time: '15h' },
                    { name: 'Ly ly', link: 'https://khodohoa.vn/wp-content/uploads/2019/09/43274300574_91a04e1d18_o.jpg', time: '3h' },
                ]}
                renderItem={Items}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    conteiner: {
        backgroundColor: "#000",
    },
    // item: {
    //     padding: 10,
    //     fontSize: 18,
    //     height: 44,
    // },
    logo: {
        flexDirection: "row",
        paddingLeft:16,
        paddingTop: 16
    },
    logoPorn: {
        fontSize: 21,
        fontWeight: "bold",
        paddingVertical: 5,
        color: "#fff"
    },
    logoHub: {
        fontSize: 21,
        backgroundColor: "#FF9800",
        paddingHorizontal: 10,
        paddingVertical: 5,
        color: "#000",
        fontWeight: "bold",
        marginLeft: 2,
        borderRadius: 5
    },
    titles: {
        padding: 16,
        flexDirection: "row",
    },
    titleList: {
        fontSize: 18,
        color: "#fff",
    },
    iconTitle: {
        marginTop: 3,
        marginRight: 4
    }
})
