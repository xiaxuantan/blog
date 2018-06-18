package com.xuan24.blog.controller.api;

import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.AmazonS3ClientBuilder;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.InputStreamResource;
import org.springframework.core.io.InputStreamSource;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;


@RequestMapping("/api/asset/{type}/{name}")
@CrossOrigin("*")
@Controller
public class AssetController {

    @Value(value = "${s3.bucket.name}")
    private String bucket_name;

    @ResponseBody
    @RequestMapping(method = RequestMethod.GET)
    public ResponseEntity<InputStreamSource> fetchAsset(@PathVariable String type, @PathVariable String name) {
        final AmazonS3 s3 = AmazonS3ClientBuilder.defaultClient();
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
