<template>

    <FrontEnd>

    <div class="container-lg kon-isi kon-mb">
        <div class="row q-ma-md" align="justify">
            <div class="col-md-12 col-sm-12 col-xs-12">

                <!-- Kontak -->
                <div class="row q-mb-md">
                    <div class="text-h5 sec-title">Kontak</div>
                </div>
                <div class="row ">
                    <div class="col-md-6 col-sm-12 col-xs-12 left-kon">
                        <!-- <div class="text-h6 text-bold">
                            Lets Connect
                        </div>
                        <div class="text-justify q-mb-lg">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo iure accusamus blanditiis provident aperiam corrupti voluptas incidunt deleniti nobis! Inventore.
                        </div> -->
                        <div class="text-h6 text-bold">
                            RS. PMI Bogor
                        </div>
                        <div class="text-justify q-mb-lg">
                            <div>
                                Alamat: Jl. Raya Pajajaran No.80, Tegallega,, Bogor Tengah, Kota Bogor, Jawa Barat 16143
                            </div>
                            <div>
                                Telepon: 0251-8393030
                            </div>
                        </div>
                        <div class="text-h6 text-bold">
                            Polsek Bogor Tengah
                        </div>
                        <div class="text-justify q-mb-lg">
                            <div>
                                Alamat: Cibogor, Bogor Tengah, Kota Bogor, Jawa Barat 16124
                            </div>
                            <div>
                                Telepon: 0856-9508-7156
                            </div>
                        </div>
                        <div class="text-h6 text-bold">
                            Polres Bogor
                        </div>
                        <div class="text-justify q-mb-lg">
                            <div>
                                Alamat: Jl. Tegar Beriman, Bogor Tengah, Kota Bogor, Jawa Barat 16914
                            </div>
                            <div>
                                Telepon: 021-8750163
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-sm-12 col-xs-12 right-kon">
                        <div class="text-h6 text-bold">
                            Send Us Message
                        </div>
                        <form action="">
                            <div class="row">
                                <div class="col-12 q-mb-md">
                                    <q-input
                                        filled
                                        clearable
                                        type="textarea"
                                        label="Message"
                                        class="form-kon"
                                        rows="10"
                                        :shadow-text="textareaShadowText"
                                        @keydown="processTextareaFill"
                                        @focus="processTextareaFill"
                                    />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6 col-sm-6 col-xs-12 q-mb-md">
                                    <q-input
                                        filled
                                        clearable
                                        class="form-kon input-left"
                                        label="Company Name"
                                        :shadow-text="inputShadowText"
                                        @keydown="processInputFill"
                                        @focus="processInputFill"
                                    />
                                </div>
                                <div class="col-md-6 col-sm-6 col-xs-12 q-mb-md">
                                    <q-input
                                        filled
                                        clearable
                                        class="form-kon input-right"
                                        label="Email"
                                        :shadow-text="inputShadowText"
                                        @keydown="processInputFill"
                                        @focus="processInputFill"
                                    />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-12 q-mb-md">
                                    <q-input
                                        filled
                                        clearable
                                        class="form-kon"
                                        label="Subject"
                                        :shadow-text="inputShadowText"
                                        @keydown="processInputFill"
                                        @focus="processInputFill"
                                    />
                                </div>
                            </div>
                            <div class="q-mt-sm">
                                <q-btn color="primary btn-edited-col text-bold" label="SEND" @click="dialog = true" />
                            </div>
                        </form>
                    </div>
                </div>
                <!-- akhir Kontak -->

            </div>
        </div>
    </div>

    </FrontEnd>

</template>

<script>
import FrontEnd from '../layout/FrontEnd.vue'

export default {

    components: {
        FrontEnd
    },
}
</script>