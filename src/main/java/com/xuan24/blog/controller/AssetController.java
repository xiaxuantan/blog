package com.xuan24.blog.controller;

import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.AmazonS3ClientBuilder;
import org.springframework.core.io.InputStreamResource;
import org.springframework.core.io.InputStreamSource;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;


@RequestMapping("/asset/{type}/{name}")
@CrossOrigin("*")
@Controller
public class AssetController {

    @ResponseBody
    @RequestMapping(method = RequestMethod.GET)
    public ResponseEntity<InputStreamSource> fetchAsset(@PathVariable String type, @PathVariable String name) {
        final AmazonS3 s3 = AmazonS3ClientBuilder.defaultClient();
        var bucket_name = "xuan24-blog-assets";
        var key = type + "/" + name;
        var o = s3.getObject(bucket_name, key);
        var s3is = o.getObjectContent();
        var metadata = o.getObjectMetadata();
        return ResponseEntity.ok()
                .contentLength(metadata.getContentLength())
                .contentType(MediaType.parseMediaType(metadata.getContentType()))
                .body(new InputStreamResource(s3is));
    }

}
